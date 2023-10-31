import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  StyleSheet } from 'react-native';

import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import BookStackNavigator from './stack-navigators/BookStackNavigator';
import ContactStackNavigator from './stack-navigators/ContactStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>
{
    return (
        <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{}}>
            <Tab.Screen
                name={'HomeStackNavigator'}
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name={'BookStackNavigator'}
                component={BookStackNavigator}
                options={{
                    tabBarLabel: 'Book ',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="book-open-blank-variant"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'ContactStackNavigator'}
                component={ContactStackNavigator}
                options={{
                    tabBarLabel: 'Contact',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="contacts" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};


export default BottomTabNavigator;
