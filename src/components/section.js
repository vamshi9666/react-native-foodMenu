import React , { Component } from 'react'
import { connect } from 'react-redux'
import { add_item_cart} from '../../redux/actions/app'
import { Text,  View , Image, Button} from 'react-native'
import FoodItem from './foodItem'

 class Section extends Component {
    constructor(props){
        super(props)
    }
    addItemCart =(item ) => {
        this.props.add_item_cart(item)
    }
    render(){
        const { id,name, dishes } = this.props;
        return (
            <View style={{ borderTopColor:'red'}}>
                <Text style={{marginLeft:16,marginBottom:16, fontSize:20,fontFamily:'open-sans-bold', fontWeight:'normal'}}>{name}</Text>
                <View style={{padding:0}}>
                    {
                        dishes.map(dish => (
                            <FoodItem  dish={dish}  />
                        ))
                    }
                </View>
            </View>
        )
    }
}

export default connect(null, { add_item_cart })(Section)