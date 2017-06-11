import React, { Component } from 'react';
import { AppRegistry, Animated, Easing, View, Button } from 'react-native';

export default class SimpleAnimateFade extends Component {
    state = {
        fadeAnim: new Animated.Value(0)
    };

    componentDidMount() {
        Animated.timing(this.state.fadeAnim,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start();
    }

    render() {
        console.log('ok render');

        return (
            <Animated.View style={{ ...this.props.style, opacity: this.state.fadeAnim }}>
                {this.props.children}
            </Animated.View>
        );
    }
}

AppRegistry.registerComponent('SimpleAnimateFade', () => SimpleAnimateFade);
