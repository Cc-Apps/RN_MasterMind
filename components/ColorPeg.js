import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ColorPeg extends React.Component {
    render() {
      return (
        <View style={styles.colorPeg}>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  colorPeg: {
    flex: 1,
    //width: 45,
    //height: 45,
    marginRight: 5,
    backgroundColor: '#ccc',
  },
});
