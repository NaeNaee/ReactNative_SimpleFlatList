import React, { Component } from 'react';
import { AppRegistry, Animated, Easing, View, Button, LayoutAnimation, UIManager, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'OK This is Profile Screen'
    }

    render() {
        return (
            <View>
                <Text>This is Profile Screen</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('ProfileScreen', () => ProfileScreen);
