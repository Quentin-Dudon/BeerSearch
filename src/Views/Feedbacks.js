import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class Feedback extends Component {
 render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> Feedback </Text>
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