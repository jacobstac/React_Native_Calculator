// src/ReactCalculator.js

import React, { Component } from 'react';
import {
    Text,
    AppRegistry
} from 'react-native';

class ReactCalculator extends Component {

    render() {
        return (
            <Text>Hello, Rdafadeact!</Text>
        )
    }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);