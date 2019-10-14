import * as React from 'react';
import { Button, View, Text,ScrollView,Dimensions,FlatList,TouchableOpacity,Image } from 'react-native';

class FlatListItem extends React.Component {
    render() {
        return (
            <View style={{ flex: 1,flexDirection: 'row', marginBottom: 2,borderColor: 'gray', borderWidth: 1, borderRadius: 4,}}>
                <Image source={{ uri: 'http://app-music2.000webhostapp.com/' + this.props.item.anh }} style={{flex:1,borderRadius:2, width: 75, height: 75}} />
                <View style={{flex:4,flexDirection:'column'}}>
                    <Text ellipsizeMode={'tail'} numberOfLines={1} style={{ flex: 1, color: 'black',fontWeight:'bold',fontSize:13, padding: 2 }}>{this.props.item.ten_tin_tuc}</Text>
                    <Text ellipsizeMode={'tail'} numberOfLines={3} style={{ flex: 1, color: 'red',fontSize:10, padding: 2 }}>{this.props.item.noi_dung}</Text>
                </View>
            </View>
        );
    }
}

class TinTucScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        this.getData(this.props.id);
    }
    async getData(params) {
        const url = 'http://app-music2.000webhostapp.com/get.php?id=' + params;
        let res = await fetch(url);
        let resJson = await res.json();
        this.setState({
            data: resJson.data,
        })
    }
    render() {
        return (
            <FlatList style={{ flex: 1, flexDirection: 'column' }} data={this.state.data} renderItem={({ item, index }) => {
                return (<TouchableOpacity onPress={() => this.props.pro.navigation.navigate("Detail", {
                    item: item,
                })}><FlatListItem item={item} index={index} /></TouchableOpacity>)
            }} />
        );
    }
}

export default class HomeScreen extends React.Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <ScrollView
            pagingEnabled={true}
            horizontal={true}
            >
                <View style={{
                    backgroundColor: 'white',
                    flex:1,
                    width:screenWidth,
                    justifyContent:'center',
                    alignContent: 'center'
                }}>
                    <Text style={{padding:10,textAlign:'center',fontSize:20,backgroundColor:'blue',marginBottom:3}}>TIN 24h</Text>
                    <TinTucScreen id={1} pro={this.props}/>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    flex: 1,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <Text style={{ padding: 10, textAlign: 'center', fontSize: 20, backgroundColor: 'green',  marginBottom: 3 }}>TIN MỚI</Text>
                    <TinTucScreen id={2} pro={this.props}/>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    flex: 1,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <Text style={{ padding: 10, textAlign: 'center', fontSize: 20, backgroundColor: 'yellow', marginBottom: 3 }}>TIN HÓT</Text>
                    <TinTucScreen id={2} pro={this.props} />
                </View>
            </ScrollView>
        );
    }
}