import React , { Component} from 'react';
import {View, Text } from 'react-native';
import { connect } from 'react-redux'
import _ from 'lodash';
class Cart extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{display:"flex",height:50 ,  justifyContent:"center", backgroundColor:'#60B244'}} >
                <Text style={{textAlign:'center'}} > { this.props.cartItems.length} Items | {_.sumBy(this.props.cartItems,'price' )} $ </Text> 
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart
    }
}
export default connect(mapStateToProps, {})(Cart)