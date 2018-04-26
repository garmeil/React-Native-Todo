import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 0.7,
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .54)',
  },
  todos: {
    alignSelf: 'flex-start',
    paddingLeft: 30,
    paddingTop: 30,

  },
  todoItem: {
    padding: 5,
    fontSize: 24,
    color: 'rgba(0, 0, 0, .54)',
  },
});

export default styles;