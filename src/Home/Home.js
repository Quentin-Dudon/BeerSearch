import React from 'react';
import { Text, View, Button } from 'react-native';

export default class HomePage extends React.Component {
    render() {
        return (
            <View>
            <Text>PAGE Home</Text>
            <Button
            title={"Go vers Splashscreen"}
            color="red"
            onPress={() => {
              this.props.navigation.navigate("EcranB")
            }}
            />
          </View>
        );
    }
}


/*
class MyHomeScreen extends React.Component{
    static navigationOptions = {
      drawerLabel: 'Home', 
      drawerIcon: ({tintColor}) => (
        <Image
          source={require('./images/chart1.png')}
          style={[styles.icon]}
        />
      ),
    }; 
  
    render(){
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <Text>Home Page!</Text>
            <Button
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
              title="DrawerOpen"
            />
        </View>
      )
    }
}

class MyNotificationsScreen extends React.Component{
    static navigationOptions = {
      drawerLabel: 'Notifications', 
      drawerIcon: ({tintColor}) => (
        <Image
          source={require('./images/chart2.png')}
          style={[styles.icon]}
        />
      ),
    }; 
  
    render(){
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <Button
              onPress={() => this.props.navigation.goBack()}
              title="Go back home"
            />
            <Button
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
              title="DrawerOpen"
            />
        </View>
      )
    }
  }

class DrawerNavigator {

}
  
*/
  
  
