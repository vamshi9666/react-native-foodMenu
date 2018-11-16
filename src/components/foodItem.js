import React, { Component } from 'react';
import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { add_item_cart, remove_item_Cart } from '../../redux/actions/app'
const styles = StyleSheet.create({
    text : {
        marginLeft: 19,
        marginRight: 19,
        marginTop: 4,
        marginBottom: 3,
        color: '#60B244',
        fontFamily: 'open-sans-bold',
        fontSize: 12 
    },
})
class FoodItem extends Component {
    constructor(props) {
        super(props)
    }
    addItemCart = (item ) => {
        console.log("item pressed to add",item);
        this.props.add_item_cart(item)
    }
    removeItemCart = (item) => {
        console.log(`item pressed to remove`, item);
        this.props.remove_item_Cart(item)
    }
    render() {
        const { dish } = this.props
        const filter = this.props.cart.find(item => item.id == dish.id)
        return (
            <View style={{ padding: 16, display: "flex", textAlignVertical: 'center', flexDirection: 'column', alignItems: 'center' }} >
                <View style={{ width: '100%', flex: 1, display: 'flex', marginBottom: 25, flexDirection: 'row' }} >
                    <Image style={{ width: 20, height: 20, marginRight: 8, alignSelf: 'flex-start' }} source={dish.isVeg ? require('../../assets/veg.png') : require('../../assets/NonVeg.png')} />
                    <Text style={{ textAlignVertical: 'center', fontSize: 12, fontFamily: 'open-sans-bold' }} >
                        {dish.name}
                    </Text>
                </View>
                <View style={{ width: '100%', flex: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={{ fontSize: 12, fontFamily: 'open-sans-bold' }} >$ {dish.price}</Text>
                    {
                        filter == undefined ?
                            <TouchableOpacity style={{ width: 64, height: 24, borderRadius: 12, borderWidth: 1, borderColor: '#90A4AE' }} onPress={() => {
                                this.addItemCart(dish)
                            }} >
                                <Text style={styles.text}>Add</Text>
                            </TouchableOpacity>
                            :
                            <View style={{ display: 'flex', width: 64, height: 24, flexDirection: 'row', borderRadius: 12, borderWidth: 1, borderColor: '#90A4AE', alignSelf: 'flex-end' }}>
                                <TouchableOpacity onPress={() => this.removeItemCart(dish)}><Text style={{ ...styles.text, marginLeft: 0, marginTop: 0, marginBottom: 0, marginRight: 0, paddingLeft: 8.5, paddingTop: 3, paddingBottom: 5, paddingRight: 7 }}>-</Text></TouchableOpacity>
                                <Text style={{ ...styles.text, marginLeft: 6, marginRight: 6, fontSize: 12, fontFamily: 'open-sans-bold' }}>
                                    {this.props.cart.filter(item => item.id == dish.id).length.toString()}
                                </Text>
                                <TouchableOpacity onPress={() => this.addItemCart(dish)} ><Text style={{ ...styles.text, paddingLeft: 7, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 0, paddingRight: 6, paddingTop: 3, paddingBottom: 2, fontFamily: 'open-sans-bold' }} >+</Text></TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart : state.cart || []
    }
}

export default connect(mapStateToProps, { add_item_cart, remove_item_Cart })(FoodItem)