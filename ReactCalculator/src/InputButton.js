/**
 * Created by Jacob on 2017-07-25.
 */
import React, { Component } from 'react';
import {
    View,
    Text

} from 'react-native'
import Style from './Style';

export default class InputButton extends Component {

    render() {
        return (
            <View style = {Style.inputButton}>
                <Text style = {Style.inputButtonText}>{this.props.value}</Text>
            </View>


        )
    }
}
//Props are essentially static data that we can pass to child components