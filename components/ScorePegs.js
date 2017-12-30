import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ScorePegs extends React.Component {
    render() {
      return (
        <View style={styles.scorePegs}>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  scorePegs: {
    flex: 1,
    //width: 64,
    //height: 64,
    backgroundColor: '#ddd',
  },
});
