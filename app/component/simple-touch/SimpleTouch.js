import React, { Component } from 'react';
import { AppRegistry, View, TextInput, Switch, Text, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

export default class SimpleTouch extends Component {
    onPress = () => {
        console.log('ok press leaw ja');
    }

    onLongPress = () => {
        console.log('ok onLongPress');
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.onPress} underlayColor={'#123456'} onLongPress={this.onLongPress}>
                    <Text>Simple TouchableHighlight</Text>
                </TouchableHighlight>

                <TouchableNativeFeedback onPress={this.onPress} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{ width: 150, height: 100, backgroundColor: 'red' }}>
                        <Text style={{ margin: 30 }}>Button</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

AppRegistry.registerComponent('SimpleTouch', () => SimpleTouch);
