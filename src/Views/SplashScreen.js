import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class SplashScreen extends Component {
 render() {
    return (
      <View>
        <Text style={styles.textFirst}> SplashScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textFirst: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});
