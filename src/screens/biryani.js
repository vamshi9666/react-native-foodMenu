import React, { Component } from "react";
import { 
    View,
    FlatList,
    Text
} from 'react-native'
import { connect } from 'react-redux';

 class  Biryani extends Component {
    
    render(){
        return (
            <View
                style={{ margin: 15 }}
            >
                <FlatList
                    data={this.props.dishes}
                    renderItem={({ item }) => {
                        return (
                            <Text style={{ margin: 16 }} >{item.name}</Text>
                        )
                    }}
                />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dishes : state.dishes.filter(dish => dish.sectionId == 'sec_KVEVWN0F')
       }
}
export default connect( mapStateToProps, { }  )(Biryani)