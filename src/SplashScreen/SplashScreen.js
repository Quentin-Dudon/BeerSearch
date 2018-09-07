import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {createStackNavigator} from "react-navigation";

import HomePage from '../Home/Home'; 

export default class SplashScreen extends React.Component {
    render() {
        return (
            <SplashScreenView/>
        );
    }
}

class EcranBScreen extends React.Component {
 
  render() {
 
    return (
      <View>
           <Text>PAGE SplashScreen</Text>
           <Button
            title={"Go vers HomePage"}
            style={styles.red}
            onPress={() => {
            this.props.navigation.navigate("HomePage")
            }}
            />
      </View>  
   
    );
  }
}

const SplashScreenView = createStackNavigator({
    EcranA: {
        screen: HomePage
    },
    EcranB: {
        screen: EcranBScreen
        
    },

  });

const styles = StyleSheet.create({
    SplashScreen: {
        color:'red',
        marginTop : 75
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
        red:{
        backgroundColor: 'red',
        },
        blue:{
        backgroundColor: 'whitesmoke',
        },
        menu: {
        flex: 1,
        },
});    
