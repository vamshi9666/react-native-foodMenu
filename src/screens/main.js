import React, { Component } from "react";
import { 
    View,
    SectionList,
    Text
} from 'react-native'
import {connect } from 'react-redux'

class  MainScreen extends Component {
    render(){
        return (
            <View
                style={{ margin: 15 }}
            >
                
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        offers: state.offersAvailable,
        sections: state.sections
    }
}


export default connect(mapStateToProps ,{ }) (MainScreen)