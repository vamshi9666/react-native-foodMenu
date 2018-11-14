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
                <View style={{width:'100%' ,flex: 1, display:'flex',marginBottom:25, flexDirection:'row'}} >
                    <Image style={{ width: 20, height: 20,marginRight:8,  alignSelf:'flex-start' }} source={dish.isVeg ? require('../../assets/veg.png') : require('../../assets/NonVeg.png')} />
                    <Text style={{  textAlignVertical:'center', fontSize:12, fontFamily:'open-sans-bold' }} >
                        {dish.name}
                    </Text>
                </View>
                <View style={{width:'100%', flex: 3,display:'flex',flexDirection:'row', justifyContent:'space-between' }} >
                    <Text style={{fontSize:12,fontFamily:'open-sans-bold'}} >$ {dish.price}</Text>
                    <TouchableOpacity style={{ borderRadius: 12 ,borderWidth:1,borderColor:'#90A4AE', alignSelf: 'flex-end' }} onPress={() => {
                        this.addItemCart(dish)
                    }} >
                        <Text style={{textAlign:"center", marginLeft:19,marginRight:19,marginTop:4, marginBottom:3, color: '#60B244', fontFamily:'open-sans-bold', fontSize:12 }}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect(null, { add_item_cart })(FoodItem)