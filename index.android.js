/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MapBeta extends Component {
  constructor(){
    super()
    this.state ={
      region:{
        latitude: 41.8781,
        longitude: 87.6298,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
        latitude: 41.8781,
        longitude: -87.6298,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

AppRegistry.registerComponent('MapBeta', () => MapBeta);
