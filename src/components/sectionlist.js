import React , { Component} from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Section from './section'
export  default class  SectionList extends Component{
    constructor(props){
        super(props);
    }
    scrollTo = () => {
        console.log('test');
        
       this._scrollViewref.scrollTo({x:0, y :225})
      }
    render(){
        const { sections , offers } = this.props;
        console.log('props in Section list',this.props.sections);
        return (
            <View style={{}} >
                <View style={{ display: "flex", flexDirection: 'row', backgroundColor: '#F2F5FC', marginVertical: 21 }} >
                    <View style={{ padding: 12, marginLeft: 20, borderWidth: 1, borderColor: '#F44336', borderRadius: 100 }}>
                        <Image style={{ width: 24, height: 24, alignContent: 'flex-start', padding: 12 }} source={require('../../assets/Offers.png')} />
                    </View>
                    <Text style={{ marginLeft: 12, textAlignVertical: 'center', textAlign: "center", fontSize: 12, fontFamily: 'open-sans-regular' }} > {offers.toString()} offers Avaliable </Text>
                </View>
                <View style={{ marginBottom: 16, backgroundColor: '#F2F5FC', height: 16, marginHorizontal: 0 }}  ></View>
                <ScrollView
                    ref={ref=> this._scrollViewref = ref}
                    nestedScrollEnabled={true}
                    alwaysBounceVertical={true}
                >
                    {sections.map(section => (
                        <Section key={section.id} onLayout={( ) => console.log('onLayout')} id={section.id} name={section.name} dishes={section.dishes} />
                    ))}
                </ScrollView>
            </View>
        )
    }
}