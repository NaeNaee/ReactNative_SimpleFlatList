import React, { Component } from 'react';
import { AppRegistry, Animated, Easing, View, Button, LayoutAnimation, UIManager, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'OK Home Screen'
    }

    onPress = () => {
        this.props.navigation.navigate('Profile', { name: 'NaeNaee' });
    }

    render() {
        return (
            <View>
                <Text>This is Home Screen</Text>
                <Button title='Go to Profile' onPress={this.onPress} />
            </View>
        );
    }
}

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
