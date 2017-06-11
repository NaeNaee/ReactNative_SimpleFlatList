import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    ListView,
    FlatList,
    Button,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

const data = [
    {
        name: 'oh',
        age: 44
    },
    {
        name: 'nae',
        age: 26
    },
    {
        name: 'mon',
        age: 60
    },
    {
        name: 'tob',
        age: 65
    },
    {
        name: 'nam',
        age: 29
    },
    {
        name: 'nad',
        age: 27
    },
    {
        name: 'nice',
        age: 27
    },
    {
        name: 'wat',
        age: 28
    },
    {
        name: 'pui',
        age: 31
    },
    {
        name: 'wa',
        age: 30
    }
];

const myItemStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    mainText: {
        fontSize: 32
    },
    secondText: {
        color: 'gray'
    },
    leftPane: {
        flex: 2
    },
    rightPane: {
        flex: 1,
        justifyContent: 'center'
    },
    selectedList: {
        backgroundColor: '#e0ebeb'
    },
    normalList: {
        backgroundColor: 'white'
    }
});

class MyItem extends React.PureComponent {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        age: React.PropTypes.number.isRequired
    };

    static defaultProps = {
        name: 'no name',
        age: 0
    };

    onPress = () => {
        this.props.onPress(this.props.name);
    }

    onTouchPress = () => {
        console.log('ok touch press');
    }

    render() {
        const viewStyle = this.props.selected ? myItemStyle.selectedList : myItemStyle.normalList;

        return (
            <TouchableOpacity onPress={this.onTouchPress}>
                <View style={viewStyle}>
                    <View style={myItemStyle.container}>
                        <View style={myItemStyle.leftPane}>
                            <Text style={myItemStyle.mainText}>{this.props.name}</Text>
                            <Text style={myItemStyle.secondText}>{this.props.age}</Text>
                        </View>

                        <View style={myItemStyle.rightPane}>
                            <Button onPress={this.onPress} title='Click me' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class SimpleFlatList extends Component {
    state = {
        selected: new Map()
    };

    keyExtractor = (item, index) => item.name;

    onPress = (id) => {
        this.setState((prevState) => {
            const selected = new Map(this.state.selected);

            selected.set(id, !selected.get(id));
            return { selected };
        })
    }

    renderItem = ({ item }) => (
        <MyItem
            name={item.name}
            age={item.age}
            onPress={this.onPress}
            selected={this.state.selected.get(item.name)} />
    );

    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    extraData={this.state.selected}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('SimpleFlatList', () => SimpleFlatList);
