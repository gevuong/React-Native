/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


// index.ios.js = place code in here for iOS

// Import a library to help create a component
// import React from 'react';
// import { Text, AppRegistry } from 'react-native'; // want to import the Text property from the library, not the entire library
//
// // Create a component
// // babeljs.io shows how jsx written in component is converted to raw JS. jsx is a dialect of JS
// const App = () => ()
//   <Text>Some Text</Text>
//     // Text tag comes from the ReactNative library
// );
//
// // Render it to device
// // need to register at least one component to the application
// AppRegistry.registerComponent('albums', () => App);



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class albums extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('albums', () => albums);
