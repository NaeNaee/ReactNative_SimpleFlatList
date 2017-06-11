import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    TouchableOpacity,
    Animated
} from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const shipRowStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    shipName: {
        fontSize: 22,
        fontFamily: 'Kanit-Regular',
        color: 'black'
    },
    shipRegisterNo: {
        color: 'gray',
        fontSize: 18
    },
    tonGross: {
        fontSize: 20
    },
    leftPane: {
        flex: 2,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue'
    },
    middlePane: {
        flex: 3,
        paddingLeft: 10
    },
    rightPane: {
        flex: 1,
        alignItems: 'flex-end'
    },
    shipImage: {
        flex: 1
    },
    statusContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        paddingRight: 5
    },
    normalFont: {
        fontSize: 18,
        fontFamily: 'Kanit-Regular'
    },
    iconRight: {
        paddingLeft: 5
    }
});

class ShipRow extends React.PureComponent {
    static propTypes = {
        shipName: React.PropTypes.string,
        shipRegisterNoKey: React.PropTypes.number,
        shipRegisterNo: React.PropTypes.string,
        shipPic: React.PropTypes.object,
        permitIconName: React.PropTypes.string,
        cert285IconName: React.PropTypes.string,
        atyabatIconName: React.PropTypes.string,
        shipStatusIconName: React.PropTypes.string,
        permitIconColor: React.PropTypes.string,
        cert285IconColor: React.PropTypes.string,
        atyabatIconColor: React.PropTypes.string,
        shipStatusIconColor: React.PropTypes.string,
        approveStatusIconName: React.PropTypes.string,
        approveStatusIconColor: React.PropTypes.string,
        tonGross: React.PropTypes.number,
        registerProvinceName: React.PropTypes.string
    };

    static defaultProps = {
        shipName: '',
        shipRegisterNoKey: 0,
        shipRegisterNo: '',
        shipPic: { uri: '' },
        permitIconName: '',
        cert285IconName: '',
        atyabatIconName: '',
        shipStatusIconName: '',
        permitIconColor: '',
        cert285IconColor: '',
        atyabatIconColor: '',
        shipStatusIconColor: '',
        approveStatusIconName: '',
        approveStatusIconColor: '',
        tonGross: 0,
        registerProvinceName: ''
    };

    render() {
        return (
            <TouchableOpacity onPress={this.onTouchPress}>
                <View style={shipRowStyle.container}>
                    <View style={shipRowStyle.leftPane}>
                        <Image source={this.props.shipPic} style={shipRowStyle.shipImage} />
                    </View>

                    <View style={shipRowStyle.middlePane}>
                        <View style={shipRowStyle.statusContainer}>
                            <Icon name={this.props.shipStatusIconName} color={this.props.shipStatusIconColor} style={shipRowStyle.icon} size={17} />
                            <Text style={shipRowStyle.shipName}>{this.props.shipName}</Text>
                        </View>

                        <Text style={shipRowStyle.shipRegisterNo}>{this.props.shipRegisterNo}</Text>
                        <View style={shipRowStyle.statusContainer}>
                            <Icon name={this.props.approveStatusIconName} color={this.props.approveStatusIconColor} style={shipRowStyle.icon} size={17} />
                            <Icon name={this.props.permitIconName} color={this.props.permitIconColor} style={shipRowStyle.icon} size={17} />
                            <Icon name={this.props.cert285IconName} color={this.props.cert285IconColor} style={shipRowStyle.icon} size={17} />
                            <Icon name={this.props.atyabatIconName} color={this.props.atyabatIconColor} style={shipRowStyle.icon} size={17} />
                        </View>
                    </View>

                    <View style={shipRowStyle.rightPane}>
                        <Text style={shipRowStyle.tonGross}>{this.props.tonGross}</Text>
                        <Text style={shipRowStyle.normalFont}>{this.props.registerProvinceName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class ShipList extends Component {
    state = {
        shipListData: [],
        refreshing: false,
        pageIndex: 0,
        search: '?userKey=25',
        textSearch: ''
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.setState(prevState => ({ refreshing: true }));
        this.doFetchData(this.state.pageIndex, 20, this.state.search)
            .then(json => {
                this.setState(prevState => ({ shipListData: [...prevState.shipListData, ...json.dataList], refreshing: false }));
            });
    }

    doFetchData = (pageIndex = 0, pageSize = 20, search = '') => {
        console.log('doFetchData say: search is ' + search);

        if (this.state.textSearch != '') {
            search += '&shipName=' + this.state.textSearch;
        }

        return fetch('http://164.115.27.232:9981/api/ShipList/' + pageIndex + '/' + pageSize + search)
            .then(response => response.json())
            .then(json => json)
            .catch(err => {
                console.log(err);
            });
    }

    keyExtractor = (item, index) => item.shipRegisterNoKey;

    renderItem = ({ item }) => {
        let shipStatusIconName = 'check-circle';
        let approveStatusIconName = 'check-circle';
        let permitIconColor = 'green';
        let cert285IconColor = 'green';
        let atyabatIconColor = 'green';
        let shipStatusIconColor = 'green';
        let approveStatusIconColor = 'green';

        if (item.approveStatus == 'W') {
            approveStatusIconColor = 'orange';
            approveStatusIconName = 'hourglass';
        }
        else if (item.approveStatus == 'N') {
            approveStatusIconColor = 'red';
            approveStatusIconName = 'close';
        }

        if (item.shipStatus != 'N' && item.shipStatus != 'N2') {
            shipStatusIconColor = 'red';
            shipStatusIconName = 'close';
        }

        if (item.permitExpireStatus != 'N') {
            permitIconColor = 'red';
        }

        if (item.cer285Status == 'N') {
            cert285IconColor = 'red';
        }

        if (item.atyabatExpireStatus != 'N') {
            atyabatIconColor = 'red';
        }

        return (
            <ShipRow
                shipName={item.shipName.trim()}
                shipRegisterNoKey={item.shipRegisterNoKey}
                shipRegisterNo={item.shipRegisterNo}
                shipPic={{ uri: 'https://cdn.patchcdn.com/users/47838/2016/04/T800x600/201604570d5a2fec617.jpg' }}
                permitIconName='ship'
                cert285IconName='newspaper-o'
                atyabatIconName='file-text'
                shipStatusIconName={shipStatusIconName}
                permitIconColor={permitIconColor}
                cert285IconColor={cert285IconColor}
                atyabatIconColor={atyabatIconColor}
                shipStatusIconColor={shipStatusIconColor}
                approveStatusIconName={approveStatusIconName}
                approveStatusIconColor={approveStatusIconColor}
                tonGross={item.tonGross}
                registerProvinceName={item.registerProvinceName} />
        );
    };

    renderHeader = () => {
        return (
            <View style={{ padding: 4 }}>
                <TextInput
                    placeholder='Search ship name or ship register number...'
                    style={{ fontSize: 20 }}
                    onSubmitEditing={this.onSubmitSearch}
                    onChangeText={this.onChangeTextSearch} />
            </View>
        );
    }

    onChangeTextSearch = (text) => {
        console.log('onChangeTextSearch say: text is ' + text);
        this.setState(prevState => ({ textSearch: text }));
    }

    onSubmitSearch = () => {
        this.fetchData();
    }

    onRefresh = () => {
        this.setState(prevState => ({ shipListData: [] }));
        this.fetchData();
        console.log('onRefresh say: OK fetched');
    };

    onEndReached = () => {
        this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }));
        this.fetchData();
        console.log('onEndReached say: OK end leaw ja');
    }

    render() {
        return (
            <View>
                <AnimatedFlatList
                    data={this.state.shipListData}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderHeader}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    onEndReachedThreshold={0.5}
                    onEndReached={this.onEndReached}
                    extraData={this.state}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('ShipList', () => ShipList);
