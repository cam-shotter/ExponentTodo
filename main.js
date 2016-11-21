import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Tasklist from './Tasklist'

class Todo extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
        <Text>Hot reloading is awesome!</Text>
        <Tasklist/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(Todo);
