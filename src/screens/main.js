import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    ScrollView
} from 'react-native'
import SectionList from '../components/sectionlist'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { get_data } from '../../redux/actions/app'
import Cart from '../components/cart'

class MainScreen extends Component {
    componentWillMount() {
        this.props.get_data();
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
                style={{ marginTop: 20, paddingTop: 0 }}
            >
                {this.props.sections.length > 0
                    ?
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            stickyHeaderIndices={[0]}>
                            <View style={{ backgroundColor: "#fff", paddingHorizontal:16 }}>
                                <Header style={{  }} title={"little italy"} disc={'5th avenue '}  ></Header>
                                <View style={{ flex: 1, borderBottomColor: '#E67E22', paddingTop: 12, borderBottomColor: '#E67E22' }}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        pagingEnabled={true} >
                                        <Text style={{ textAlignVertical: 'center', borderStyle:'dashed', borderBottomColor:'#E67E22' }} onPress={() => console.log('Main')} > Main</Text>
                                        {this.props.sections.map(section => (<Text  style={{ margin: 15 }} key={section.index} onPress={() => console.log(section.name)}>{section.name}</Text>))}
                                    </ScrollView>
                                </View>
                            </View>
                            <SectionList
                                style={{ marginTop: 8 }}
                                offers={this.props.offers}
                                sections={this.props.sections}
                            />
                        </ScrollView>
                        <Cart />
                    </View>
                    :
                    <Text>Loading</Text>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        offers: state.offersNo,
        sections: state.sections
    }
}
export default connect(mapStateToProps, { get_data })(MainScreen)
