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
        },
        {
          task: 'Learn Redux'
        }
      ]
    }
  }

  render() {
    return (

        <Tasklist todos={this.state.todos}/>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

Exponent.registerRootComponent(Todo);
