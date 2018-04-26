import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [1, 2, 3, 4], newTodo: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handlePress = this.handlePress.bind(this)
    this.deletePress = this.deletePress.bind(this)
  }
  handleChange(e) {
    this.setState({ newTodo: e })
  }
  handlePress() {
    let newTodos = [...this.state.todos, this.state.newTodo]
    this.setState({ todos: newTodos })
  }
  deletePress(index) {
    let newTodos = this.state.todos;
    newTodos.splice(index, 1)
    this.setState({ todos: newTodos })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(e) => this.handleChange(e)} />
        <TouchableHighlight onPress={() => this.handlePress()}>
          <Text>Tap</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo, index) => <TouchableHighlight key={index} onPress={e => this.deletePress(index)}><Text>{todo}</Text></TouchableHighlight>)}
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
