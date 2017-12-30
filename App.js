import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './components/Board';


export default class App extends React.Component {
  render() {
    return (
      <Board></Board>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
