import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      alignItems: 'center',
      justifyContent: 'center',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
   },
   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
   }
});
