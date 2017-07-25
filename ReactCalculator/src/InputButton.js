/**
 * Created by Jacob on 2017-07-25.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight

} from 'react-native'
import Style from './Style';

export default class InputButton extends Component {

    render() {
        return (
            <TouchableHighlight style={Style.inputButton}
                                underlayColor="#288167"
                                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
}
//Props are essentially static data that we can pass to child components