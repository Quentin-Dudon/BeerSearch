import React from "react";
import { Image } from 'react-native';

import { createBottomTabNavigator } from "react-navigation";

import Home from '../Views/Home'; 
import LocalBar from '../Views/LocalBar'; 
import PopularBar from '../Views/PopularBar'; 
import Feedback from '../Views/Feedbacks'; 

export const Tab = createBottomTabNavigator({
  Home : {
    screen: Home, 
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: <Image
        source={require('../../images/home.png')}
        style={{ height: 30, width: 30}}
     />, 
    },
  },
  LocalBar: {
    screen: LocalBar, 
    navigationOptions: {
      tabBarLabel: 'Local',
      tabBarIcon: <Image
        source={require('../../images/beer.png')}
        style={{ height: 30, width: 30}}
     />, 
    },
  },
  PopularBar: {
    screen: PopularBar,
    navigationOptions: {
      tabBarLabel: 'Popular',
      tabBarIcon: <Image
        source={require('../../images/popular.png')}
        style={{ height: 35, width: 50}}
     />, 
    },
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: {
      tabBarLabel: 'Feedback',
      tabBarIcon: <Image
      source={require('../../images/comment.png')}
      style={{ height: 30, width: 30}}
   />, 
    },
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
      style: {
        height: 100
      },
      activeTintColor: '#f2f2f2',
      activeBackgroundColor: "#2EC4B6",
      inactiveTintColor: '#666',
      labelStyle: {
        fontSize: 15,
        padding: 10,
        margin: 5
      }
  }
});