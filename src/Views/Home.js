import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> Home </Text>
      </ScrollView>
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
  
  
