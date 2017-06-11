import React, { Component } from 'react';
import { AppRegistry, View, TextInput, Switch } from 'react-native';

export default class TestInput extends Component {
    state = {
        textValue: '',
        switchValue: false
    };

    onTextBlur = () => {
        console.log('ok text blur');
    }

    onChangeText = (value) => {
        console.log('ok text change');
        this.setState(prevState => ({ textValue: value }));
    }

    onSubmitEditing = () => {
        console.log('ok text submit');
    }

    onSwitchChange = (value) => {
        console.log('switch change to ' + value);
        this.setState(prevState => ({ switchValue: value }));
    }

    render() {
        return (
            <View style={{ padding: 20 }}>
                <TextInput
                    value={this.state.textValue}
                    onBlur={this.onTextBlur}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this.onSubmitEditing} />

                <TextInput />

                <Switch
                    onValueChange={this.onSwitchChange}
                    value={this.state.switchValue} />
            </View>
        );
    }
}

AppRegistry.registerComponent('TestInput', () => TestInput);
