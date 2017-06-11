import React, { Component } from 'react';
import { AppRegistry, Animated, Easing, View, Button, LayoutAnimation, UIManager } from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const AButton = Animated.createAnimatedComponent(Button);

export default class SpringAnimation extends Component {
    state = {
        value: new Animated.ValueXY({ x: 0, y: 0 })
    };

    onPress = () => {
        this.springLayout();
    }

    springLayout = () => {
        LayoutAnimation.spring();
        this.setState(prevState => ({ w: prevState.w + 25, h: prevState.h + 25 }));
    }

    onPress2 = () => {
        this.springLayout();

        Animated.timing(this.state.fadeAnim,
            {
                toValue: 1
            }
        ).start();
    }

    render() {
        console.log('ok render');

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: this.state.w, height: this.state.h, backgroundColor: 'red' }}>

                </View>

                <Button title='Press me' onPress={this.onPress} />

                <AButton style={{ opacity: this.state.fadeAnim }} title='Press me with animate' onPress={this.onPress2} />
            </View>
        );
    }
}

AppRegistry.registerComponent('SpringAnimation', () => SpringAnimation);
