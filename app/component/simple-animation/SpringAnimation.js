import React, { Component } from 'react';
import { AppRegistry, Animated, Easing, View, Button, LayoutAnimation, UIManager } from 'react-native';

export default class SpringAnimation extends Component {
    state = {
        value: new Animated.ValueXY({ x: 0, y: 0 }),
        on: false
    };

    componentDidMount() {
        Animated.spring(
            this.state.value,
            {
                toValue: { x: 100, y: 0 },
                tension: 100
            }
        ).start();

        this.setState(prevState => ({ on: true }));
    }

    onPress = () => {
        console.log(this.state.on);
        const newX = this.state.on ? 0 : 100;

        // this.setState(prevState => ({ value: new Animated.ValueXY({ x: newX, y: 0 }) }))

        Animated.spring(
            this.state.value,
            {
                toValue: { x: newX, y: 0 },
                tension: 100
            }
        ).start();

        this.setState(prevState => ({ on: !prevState.on }));
    }

    render() {
        console.log('ok render');

        return (
            <View>
                <Animated.View style={{ left: this.state.value.x, top: this.state.value.y, width: 100, height: 100, backgroundColor: 'red' }}>

                </Animated.View>

                <Button title='Click me' onPress={this.onPress} />
            </View>
        );
    }
}

AppRegistry.registerComponent('SpringAnimation', () => SpringAnimation);
