import React, { Component } from 'react';
import { View, Text, Image, Button , TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { add_item_cart } from '../../redux/actions/app'

class FoodItem extends Component {
    constructor(props) {
        super(props)
    }
    addItemCart = (item ) => {
        console.log("item pressed to add",item);
        this.props.add_item_cart(item)
    }
    render() {
        const { dish } = this.props
        return (
            <View style={{   padding: 16, display: "flex",textAlignVertical:'center', flexDirection: 'column', alignItems: 'center' }} >
                <View style={{width:'100%' ,flex: 1, display:'flex', flexDirection:'row'}} >
                    <Image style={{ width: 20, height: 20, margin: 20, alignSelf:'flex-start' }} source={dish.isVeg ? require('../../assets/veg.png') : require('../../assets/NonVeg.png')} />
                    <Text style={{  textAlignVertical:'center' }} >
                        {dish.name}
                    </Text>
                </View>
                <View style={{width:'100%',paddingHorizontal:16, flex: 3,display:'flex',flexDirection:'row', justifyContent:'space-between' }} >
                    <Text >{dish.price}</Text>
                    <TouchableOpacity style={{ borderRadius: 10 ,borderWidth:1, width: 64, height: 24, alignSelf: 'flex-end', borderStyle: 'solid', alignSelf: 'flex-end' }} onPress={() => {
                        this.addItemCart(dish)
                    }} >
                        <Text style={{textAlign:"center", color: '#60B244' }}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect(null, { add_item_cart })(FoodItem)