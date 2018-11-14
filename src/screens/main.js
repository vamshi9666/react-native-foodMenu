import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    ScrollView,
    StyleSheet
} from 'react-native'
import SectionList from '../components/sectionlist'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { get_data } from '../../redux/actions/app'
import Cart from '../components/cart'


const styles = StyleSheet.create({
    sectionNavItem:{
        textAlignVertical: 'center',
        paddingHorizontal: 24 ,
        paddingTop:8,
        paddingBottom:21,
        borderBottomColor: '#E67E22'
    }
})


class MainScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeSection :null
        }
    }
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
                            <View style={{ backgroundColor: "#fff", paddingHorizontal:0 ,}}>
                                <Header style={{}} title={"Little italy"} disc={'5th avenue beverly hills'}  ></Header>
                                <View style={{ flex: 1 , paddingTop: 12 }}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        pagingEnabled={true} >
                                        <Text style={{ ...styles.sectionNavItem, borderBottomWidth:this.state.activeSection== null ? 2 : 0,  }} onPress={() => this.setState({activeSection:null})} > Main</Text>
                                        {this.props.sections.map(section => (<Text  style={{  ...styles.sectionNavItem,borderBottomWidth: this.state.activeSection ==section.name ? 2 : 0,   }} key={section.index} onPress={() => this.setState({activeSection:section.name})}>{section.name}</Text>))}
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
