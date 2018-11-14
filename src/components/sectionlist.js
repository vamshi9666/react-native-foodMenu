import React , { Component} from 'react';
import { View, Text, ScrollView, Image } from 'react-native'
import Section from './section'
export  default class  SectionList extends Component{
    constructor(props){
        super(props);
        this.sectionRef = React.createRef()
    }
    scroolTo = () => {

    }   
    render(){
        const { sections , offers } = this.props;
        console.log('props in Section list',this.props.sections);
        return (
            <View style={{ }} >
                <View style={{ display: "flex", flexDirection: 'row', backgroundColor: '#F2F5FC', justifyContent: 'center', margin: 0 }} >
                    <Image style={{ width: 50, height: 50 }} source={require('../../assets/Offers.png')} />
                    <Text style={{ textAlignVertical: 'center', textAlign: "center", fontSize: 15 }} > {offers.toString()} offers Avaliable </Text>
                </View>
                <ScrollView
                    nestedScrollEnabled={true}
                    alwaysBounceVertical={true}
                >
                    {sections.map(section => (
                        <Section  key={section.id} id={section.id} name={section.name} dishes={section.dishes} />
                    ))}
                </ScrollView>
            </View>
        )
    }
}