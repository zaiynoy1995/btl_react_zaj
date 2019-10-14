import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam('item', [])
        }
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Image style={{ flex: 1 }} source={{ uri: 'http://app-music2.000webhostapp.com/' + this.state.item.anh }} style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").width/1.5 }} />
                <View style={{ flex: 1, marginTop: 5 }}>
                    <Text style={{ marginLeft: 5, fontSize: 17,color: 'red' }}>Tên: {this.state.item.ten_tin_tuc}</Text>
                    <Text style={{ marginLeft: 5, fontSize: 10 }}>Ngày đăng: {this.state.item.ngay_dang}</Text>
                    <Text style={{ marginLeft: 5 }}>Nội dung: {this.state.item.noi_dung}</Text>
                </View>
            </ScrollView>
        );
    }
}
export default DetailsScreen;