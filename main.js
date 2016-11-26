import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
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
        },
        {
          task: 'Finish this todo app'
        }
      ]
    }
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    })
  }

  renderScene(route, nav) {
    switch(route.name) {
      case 'taskform':
        return (
          <Text>Add form comes here!</Text>
        )
      default:
        return (
          <Tasklist
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos}/>
        )
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'tasklist', index: 0 }}
        ref={((nav) => {
          this.nav = nav
        })}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

Exponent.registerRootComponent(Todo);
