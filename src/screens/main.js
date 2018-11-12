import React, { Component } from "react";
import {
    View,
    SectionList,
    Text,
    Image,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { get_data } from '../../redux/actions/app'
import FoodItem from '../components/foodItem'

class MainScreen extends Component {
    componentWillMount() {
        this.props.get_data();
        this.sectionList = React.createRef()
    }
    componentDidMount() {
        console.log(this.refs);
        
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
                {this.props.sections.length > 0
                    ?
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        stickyHeaderIndices={[0]}>
                        <View style={{ backgroundColor: "#fff" }}>
                            <Header style={{ backgroundColor: 'blue' }} title={"little italy"} disc={'5th avenue '}  ></Header>
                            <View style={{ display: "flex", paddingTop: 15, flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text> Main</Text>
                                {this.props.sections.map(section => (<Text onPress={() => console.log(this.refs)
                                 } >{section.name}</Text>))}
                            </View>
                        </View>
                        <SectionList
                            scrollEnabled={true}
                            ref="sectionList"
                            style={{ flex: 1 }}
                            sections={catogaries}
                            renderItem={({ item, index, section }) => (<Text style={{ width: 330, textAlign: "center", margin: 15 }} key={index}>{item.name}</Text>)}
                            renderSectionFooter={() => {
                                return (
                                    <View style={{ padding: 15 }} ></View>
                                )
                            }}
                            keyExtractor={(item, index) => item + index}
                        >
                         </SectionList>
                    </ScrollView>
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
export default connect(mapStateToProps, { get_data })(MainScreen)