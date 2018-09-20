import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps'; 

export default class Map extends Component {

  render() {
    return (
      <MapView
      style={styles.container}
      initialRegion={{
        latitude: 45.750000,
        longitude: 4.850000,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%', 
  }
}); 