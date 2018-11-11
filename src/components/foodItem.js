import React , {  Component } from 'react';
import { View, Text} from 'react-native'

export default class FoodItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <View style={{ display: 'flex', padding: 16 }} >
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}