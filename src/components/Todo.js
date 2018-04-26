import React from 'react';
import {
    StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity,
} from 'react-native'
import styles from "../styles/Styles.js";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = { todos: [1, 2, 3, 4], newTodo: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handlePress = this.handlePress.bind(this)
    this.deletePress = this.deletePress.bind(this)
  }
  componentDidMount(){
    fetch('http://192.168.0.8:5000/todos', {
      headers: {
        'Accept': 'application/json'
      },
    }).then(res => res.json()).then(data => this.setState({ todos:data}))
  }
  handleChange(e) {
    this.setState({ newTodo: e })
  }
  handlePress() {
    fetch('http://192.168.0.8:5000/todos',{
      method: 'POST',
      body: JSON.stringify({
        name: this.state.newTodo
      }), 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => this.setState({todos: [this.state.newTodo, ...this.state.todos]})).catch(err => console.log(err))
  }
  deletePress(index) {
    let newTodos = this.state.todos;
    newTodos.splice(index, 1)
    this.setState({ todos: newTodos })
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Text>TODO LIST</Text>
        <View style={styles.form}>
        <TextInput style={styles.input} onChangeText={(e) => this.handleChange(e)} />
        <TouchableHighlight style={styles.button} onPress={() => this.handlePress()}>
          <Text style={styles.buttonText}>Tap</Text>
        </TouchableHighlight>
    </View>
    
        <View style={styles.todos} >
        {this.state.todos ? this.state.todos.map((todo, index) => <TouchableOpacity  key={index} onPress={e => this.deletePress(index)}><Text
         style={styles.todoItem}>{todo.name}</Text></TouchableOpacity>) : "Empty"}
    </View>
      </View>
    );
  }
}

export default Todo

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'lightsalmon',
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });