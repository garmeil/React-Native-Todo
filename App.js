import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from "./src/styles/Styles"
// import Todo from "./src/components/Todo";
import Todo from "./src/components/Todo"
import Reddit from "./src/components/Reddit"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Reddit />
      </View>
    );
  }
}

