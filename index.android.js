/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SimpleFlatList from './app/component/flat-list/SimpleFlatList';
import TestInput from './app/component/test-input/TestInput';
import CallAPI from './app/component/call-api/CallAPI';
import ShipList from './app/component/ship-list-with-flat-list/ShipList';
import SimpleTouch from './app/component/simple-touch/SimpleTouch';
import TestAnimationFade from './app/component/simple-animation/TestAnimationFade';
import TestLayoutAnimation from './app/component/simple-animation/TestLayoutAnimation';
import SpringAnimation from './app/component/simple-animation/SpringAnimation';
import SimpleNavigation from './app/component/navigation/SimpleNavigation';
import { AppRegistry, View } from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <SpringAnimation />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
