import React, { Component } from 'react';
import { AppRegistry, View, TextInput, Switch, Text } from 'react-native';

export default class CallAPI extends Component {
    componentDidMount() {
        fetch('http://164.115.27.232:9981/api/ShipList/0/20?userKey=25')
            .then(response => response.json())
            .then(json => {
                console.log(json);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <View style={{ padding: 20 }}>
                <Text>API</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('CallAPI', () => CallAPI);
