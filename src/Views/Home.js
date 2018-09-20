import React from 'react';
import { Modal, TouchableHighlight, View, TextInput, StyleSheet, Image, Text, Platform, FlatList, ScrollView } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { Icon, Button } from 'react-native-elements';
// import BarTemplate from './BarTemplate';

// import {createStackNavigator} from "react-navigation";


export default class Home extends React.Component {
  
  constructor(){
    super();

    // this.state : variable de classe
    this.state = {
      modalVisible: false, 
      text: ' ', 
      location: null, 
      latitude: null, 
      longitude: null, 
      errorMessage: null, 
      textInput:"",
      data:[]
    };
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

  async citySearch() {
    const API_KEY = "5361a2d990b9675151ba0b3c495dc3ca";
    let queryCity = this.state.textInput;
    let url = 'http://beermapping.com/webservice/locquery/' + API_KEY + '/' + queryCity + '&s=json';

    try {
      let response = await fetch(url);
      let responseJson = await response.json();

      this.setState({
        data: responseJson
      });
    } catch (error) {
        alert("L'erreur suivante est survenue :\n" + error);
    }
  }

  renderItem(item) {
      //let barTemplate = new BarTemplate();
      return render  = [
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.item.name}</Text>
            <Text style={styles.itemText}>Status: {item.item.status}</Text>
            <Text style={styles.itemText}>Location: {item.item.street} - {item.item.city} - {item.item.country}</Text>
            <View style={styles.itemRating}>
              <Text style={styles.itemRatingTitle}>Rating</Text>
              <Text style={styles.itemRatingNumber}>{Math.floor(item.item.overall)}</Text>
            </View>
            <Button
              buttonStyle={styles.button}
              title ={"Fiche Détaillée"}
              onPress={ () => {
                this.props.navigation.navigate("BarTemplate"); 
                this.setModalVisible(!this.state.modalVisible)
              }}
            />
          </View>
      ];
  }

  render() {

    let text = '';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    } 

    // const list = this.state.data.length == 0 ? <Text style={styles.item}>No results for your search...</Text> : <FlatList
    //     data={this.state.data}
    //     renderItem={this.renderItem.bind(this)}
    // />

    return (
      <View style={styles.homePage}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}>
          <View style={{flex: 3, backgroundColor: '#333333'}}>
            <View style={{flexDirection: 'row', margin:10}}>
              <View style={{flex: 1, marginTop: 25}}>
                <Icon
                  name='close'
                  type='font-awesome'
                  color='#ffffff'
                  onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                />
              </View>
              <View style={{flex: 9}}>
                <TouchableHighlight style={{marginTop: 20}}>
                  <TextInput
                    style={{height: 40, borderWidth:0, color:'#ffffff', textAlign: 'center'}}
                    placeholder="Entrer le nom d'une ville"
                    onChangeText={(textInput) => this.setState({textInput})}
                  />
                </TouchableHighlight>
                <View>
                  <Button
                      buttonStyle={styles.button}
                      title ={"Rechercher"}
                      onPress={this.citySearch.bind(this)}
                  />
                  
                </View>
              </View>
            </View>
          </View>
          <View style={{flex: 7, backgroundColor: '#333333'}}>
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem.bind(this)}
            />
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
        <Image source={require('../../images/bar.jpg')} style={styles.image}></Image>
        <View style={styles.container}>
          <Text style={styles.paragraph}>{text}</Text>
          {/* <Text style={styles.paragraph}>latitude : {this.state.latitude}</Text>
          <Text style={styles.paragraph}>longitude : {this.state.longitude}</Text> */}
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
  item: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor:'#2EC4B6',
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#fff",
    marginBottom: 10,
  },
  itemText: {
    color: "#fff",
  },
  itemRating: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderColor:'#fff',
  },
  itemRatingTitle: {
    fontSize: 12,
    color: "#fff",
  },
  itemRatingNumber: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#fff",
  }, 
  button: {
    backgroundColor: '#1194f6',
    borderColor: 'red',  
    borderRadius: 15, 
    width : '100%', 
    justifyContent: "center", 
    alignItems: 'center', 
    marginRight: 50   
 }
});

  
