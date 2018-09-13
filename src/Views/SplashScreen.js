import React, {Component} from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import { Tab } from '../config/navigation';

export default class SplashScreen extends Component {
 
  constructor(){
    super();
    this.state={
      isVisible : true,
    }
  }
  
  Hide_Splash_Screen=()=>{
    this.setState({ 
      isVisible : false 
    });
  }
  
  componentDidMount(){
    var that = this;
    setTimeout(function(){
      that.Hide_Splash_Screen();
    }, 6000);
  }
 
  render() {
    let Splash = (
    <View style={SplashStyle.container}>
        <View style={SplashStyle.containerTop}>
            <Image source={require("../../images/giphy.gif")} 
              style={{width: 400, height: 400}}/>  
        </View>
        <Text style={SplashStyle.containerMiddle}>La Bar de recherche</Text>
    </View>)
   
    return(
 
    <View style = { SplashStyle.MainContainer }>
      {(this.state.isVisible === true) ? Splash : <Tab/>}
    </View>   
    );
  }
}
 
const SplashStyle = StyleSheet.create({
  MainContainer: {
        flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },

  containerTop: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerMiddle: {
    flex: 2,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  containerBottom: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

