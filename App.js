import React, { Component } from 'react';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import { AuthTab } from './Router';

export default class App extends Component {
    render() {
        return <AuthTab />;
    }
}
