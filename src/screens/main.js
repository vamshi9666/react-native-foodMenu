import React, { Component } from "react";
import { 
    View,
    SectionList,
    Text
} from 'react-native'
import {connect } from 'react-redux'
import Header from '../components/Header'
import { get_data } from '../../redux/actions/app'

class  MainScreen extends Component {
    componentWillMount(){
        this.props.get_data();
        console.log(this.props);
        
        }
    render(){
        const catogaries = [];
        this.props.sections.map(one => {
            
            const section = {
                title: one.name,
                data: one.dishes
            };
            catogaries.push(section);
        })
        return (
            <View
                style={{ margin: 15 }}
            >
                <Header title={"head"} ></Header>
                {this.props.sections.length > 0 
                ?
                    <SectionList
                        sections={catogaries}
                        renderItem={({ item, index, section: {  } }) => <Text key={index}>{item.name}</Text>}
                        renderSectionHeader={({ section: { name } }) => {
                            return (
                                <Text style={{ fontWeight: 'bold' }}>{name}</Text>
                            )
                        }}

                        keyExtractor={(item, index) => item + index}
                    /> 
                :
                <Text>Loading</Text>
                }
               
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
export default connect(mapStateToProps ,{ get_data }) (MainScreen)