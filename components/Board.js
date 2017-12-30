import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './Row';

export default class Board extends React.Component {
    render() {
      return (
        <View style={styles.board}>
          <Row>Row1</Row>
          <Row>Row2</Row>
          <Row>Row3</Row>
          <Row>Row4</Row>
          <Row>Row5</Row>
          <Row>Row6</Row>
          <Row>Row7</Row>
          <Row>Row8</Row>
          <Row>Row9</Row>
          <Row>Row10</Row>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop: 50,
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
