import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

class Tasklist extends Component {
  constructor(props, context) {
    super(props, context)

  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text>This is a task!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  }
})

export default Tasklist
