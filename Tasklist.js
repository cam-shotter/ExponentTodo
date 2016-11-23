import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  TouchableHighlight,
  Text,
} from 'react-native';

import TaskRow from './TaskRow'

class Tasklist extends Component {
  constructor(props, context) {
    super(props, context)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    }
  }

  renderRow(todo) {
    return (
      <TaskRow todo={todo} />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />

      <TouchableHighlight>
        
      </TouchableHighlight>
      </View>
    )
  }
}

Tasklist.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start',
  }
})

export default Tasklist
