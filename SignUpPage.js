import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput } from 'react-native';


export default class SignUpPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            hadWrongPass: false,
        };
    }

    signUp = () => {
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ hadWrongPass: true });
        }
        else
            this.setState({hadWrongPass: false})    
    };

    focusPassword = () => {
        this.passwordInput.focus();
    };

    focusConfirmPassword = () => {
        this.confirmPasswordInput.focus();
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText}>SingUp</Text>

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
                    value={this.state.password}
                    returnKeyType="next"
                    onChangeText={password => this.setState({ password })}
                    underlineColorAndroid="transparent"
                    ref={t => (this.passwordInput = t)}
                    onSubmitEditing={this.focusConfirmPassword}
                />

                <TextInput
                    placeholder="Confirm Password"
                    style={styles.textInput}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.confirmPassword}
                    returnKeyType="done"
                    onChangeText={confirmPassword =>
                        this.setState({ confirmPassword })
                    }
                    underlineColorAndroid="transparent"
                    ref={t => (this.confirmPasswordInput = t)}
                    onSubmitEditing={this.signUp}
                />

                {this.state.hadWrongPass && (
                    <Text style={styles.errorMessage}>
                        Passwords don't match
                    </Text>
                )}

                <Text style={styles.signInText} onPress={this.signUp}>
                    Sign Up
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
    textInput: {
        borderBottomColor: mainAppColor,
        borderBottomWidth: 2,
        marginVertical: 10,
        paddingVertical: 10,
        fontSize: 16,
        color: 'black',
    },
    signInText: {
        color: mainAppColor,
        marginVertical: 40,
        fontSize: 26,
    },
    errorMessage: {
        fontSize: 22,
        color: 'red',
        marginTop: 10,
    },
});
