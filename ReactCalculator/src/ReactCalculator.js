// src/ReactCalculator.js

import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';

class ReactCalculator extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 2, backgroundColor: '#19412d'}}></View>
                <View style={{flex: 8, backgroundColor: '#3e6f56'}}></View>
            </View>
        )
    }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);