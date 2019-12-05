import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput } from 'react-native';


export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            Password: '',
        };
    }

    signIn = () => {};

    focusPassword = () => {
        this.passwordInput.focus();
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText}>Sign in</Text>
                <Text style={styles.welcomeText2}>to continue</Text>

                <TextInput
                    placeholder="Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.username}
                    returnKeyType="next"
                    onChangeText={username => this.setState({ username })}
                    underlineColorAndroid="transparent"
                    onSubmitEditing={this.focusPassword}
                />

                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.Password}
                    returnKeyType="done"
                    onChangeText={password => this.setState({ password })}
                    underlineColorAndroid="transparent"
                    ref={t => (this.passwordInput = t)}
                    onSubmitEditing={this.signIn}
                />

                <Text style={styles.signInText} onPress={this.signIn}>
                    Sign In
                </Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 30,
    },
    welcomeText: {
        fontSize: 24,
        color: 'black',
    },
    welcomeText2: {
        fontSize: 24,
        color: 'grey',
        marginVertical: 5,
        marginBottom: 25,
    },
    textInput: {
        borderBottomColor:  '#0AB9FF',
        borderBottomWidth: 2,
        marginVertical: 10,
        paddingVertical: 10,
        fontSize: 16,
        color: 'black',
    },
    signInText: {
        color:  '#0AB9FF',
        marginVertical: 40,
        fontSize: 26,
    },
});
