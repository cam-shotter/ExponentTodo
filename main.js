import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  View,
} from 'react-native';

import Tasklist from './Tasklist'
import TaskForm from './TaskForm'

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
      ]
    }
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    })
  }

  onAdd(task) {
    console.log('added something', task);
    this.state.todos.push({ task })
    this.setState({ todos: this.state.todos })
    this.nav.pop()
  }

  onCancel() {
    this.nav.pop()
  }

  onDone(todo) {
    console.log('todo was completed: ', todo.task);
  }

  renderScene(route, nav) {
    switch(route.name) {
      case 'taskform':
        return (
          <TaskForm
            onCancel={this.onCancel.bind(this)}
            onAdd={this.onAdd.bind(this)}
          />
        )
      default:
        return (
          <Tasklist
            onAddStarted={this.onAddStarted.bind(this)}            onDone={this.onDone.bind(this)}
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
