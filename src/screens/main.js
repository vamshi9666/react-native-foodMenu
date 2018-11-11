import React, { Component } from "react";
import { 
    View,
    SectionList,
    Text
} from 'react-native'
import {connect } from 'react-redux'
import Header from '../components/Header'
import { get_data } from '../../redux/actions/app'
import FoodItem from '../components/foodItem'

class MainScreen extends Component {
    componentWillMount() {
        this.props.get_data();
        console.log(this.props);
    }
    render() {
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
                style={{ margin: 15, paddingTop: 16 }}
            >
                <Header title={"head"} ></Header>
                {this.props.sections.length > 0
                    ?
                    <SectionList
                        style={{ flex: 1 }}
                        sections={catogaries}
                        renderItem={({ item, index, section: { } }) => <Text style={{ width: 300, textAlign: "center", margin: 15 }} key={index}>{item.name}</Text>}
                        renderSectionHeader={({ section: { title } }) => {
                            return (
                                <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{title}</Text>
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