import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

const mainAppColor = '#0AB9FF';

export const AuthTab = TabNavigator(
    {
        SignIn: {
            screen: SignInPage,
            navigationOptions: {
                tabBarLabel: 'Sign In',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./signInButton.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                ),
            },
        },
        SignUp: {
            screen: SignUpPage,
            navigationOptions: {
                tabBarLabel: 'Sign Up',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./signUpButton.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                ),
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: mainAppColor,
            inactiveTintColor: 'gray',
            showLabel: true,
            showIcon: true,
            style: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                paddingBottom: 3,
            },
            labelStyle: { fontSize: 12 },
            indicatorStyle: { backgroundColor: 'transparent' },
        },
    },
);

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
