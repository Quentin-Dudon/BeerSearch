import React from 'react';
import { Modal, TouchableHighlight, View, TextInput, StyleSheet, Image, Text, Platform } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { Icon } from 'react-native-elements';

export default class Home extends React.Component {
  
  constructor(){
    super();
    // this.state : variable de classe
    this.state = {modalVisible: false, text: ' ', location: null, latitude: null, longitude: null, errorMessage: null};
  } 

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        latitude: 45.750000,
        longitude: 4.850000,
        error: null,
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    // async : renvoie une promise 
    // await : attend le retour de ma promise et récupère la valeur 
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    }
  };
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    let text = '';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    } 

    return (
      <View style={styles.homePage}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}>
          <View style={{flex: 1, backgroundColor: '#333333'}}>
            <View style={{flexDirection: 'row', margin:10}}>
              <View style={{flex: 2, marginTop: 25}}>
                <Icon
                  name='close'
                  type='font-awesome'
                  color='#ffffff'
                  onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                />
              </View>
              <View style={{flex: 8}}>
                <TouchableHighlight style={{marginTop: 20}}>
                  <TextInput
                    style={{height: 40, borderWidth:0}}
                    placeholder="Rechercher"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight style={{marginLeft: 350, marginTop:20, marginBottom: 20}}>
          <Icon
          name='search'
          type='font-awesome'
          color='#000000'
          onPress={() => {this.setModalVisible(true)}}
          />
        </TouchableHighlight>
        {/* <Image source={require('../../images/bar.jpg')} style={styles.image}></Image> */}
        <View style={styles.container}>
          <Text style={styles.paragraph}>{text}</Text>
          <Text style={styles.paragraph}>latitude : {this.state.latitude}</Text>
          <Text style={styles.paragraph}>longitude : {this.state.longitude}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homePage: {
    marginTop: 20,
    flex: 1, 
  },
  image :{
    height: 550, 
    width: 500,
  }, 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

  
