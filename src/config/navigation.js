import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "react-navigation";
import {NavToBarTemplate} from "./NavToBarTemplate";

import LocalBar from '../Views/LocalBar'; 
import PopularBar from '../Views/PopularBar'; 
import Map from '../Views/Map'; 

export const Tab = createBottomTabNavigator({
  Home : {
    screen: NavToBarTemplate, 
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: <Image
        source={require('../../images/home.png')}
        style={{ height: 30, width: 30}}
     />
    }
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
  Map: {
    screen: Map,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: <Image
      source={require('../../images/map.png')}
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
        height: 70
      },
      activeTintColor: '#f2f2f2',
      activeBackgroundColor: "#e65c00",
      inactiveTintColor: '#666',
      labelStyle: {
        fontSize: 15,
        paddingBottom: 5,
        marginTop: 0,
        paddingTop: 0,
      }
  }
});
