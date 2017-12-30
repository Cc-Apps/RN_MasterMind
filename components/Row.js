import React from 'react'
import { StyleSheet, View } from 'react-native';
import ColorPeg from './ColorPeg';
import ScorePegs from './ScorePegs'

export default class Row extends React.Component {
    render() {
      return (
        <View style={styles.row}>
          <ColorPeg></ColorPeg>
          <ColorPeg></ColorPeg>
          <ColorPeg></ColorPeg>
          <ColorPeg></ColorPeg>
          <ScorePegs></ScorePegs>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#aaa',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});
