import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Home';
import DetailScreen from './Detail';

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerTitle: 'Trang chủ',
            },
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: {
                headerTitle: 'Chi tiết',
            },
        },
    },
    {
        initialRouteName: 'Home',
    }
);
export default createAppContainer(RootStack);