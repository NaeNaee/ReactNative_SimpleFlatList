import React, { Component } from 'react';
import { AppRegistry, Animated, Easing, View, Button, LayoutAnimation, UIManager, Navigator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
});

export default class SimpleNavigation extends Component {
    render() {
        return (
            <HomeScreen />
        );
    }
}

AppRegistry.registerComponent('SimpleNavigation', () => App);
