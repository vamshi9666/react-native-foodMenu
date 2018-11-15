import React , { Component} from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { ScrollIntoViewWrapper } from 'react-native-scroll-into-view'
import Section from './section'

const scrollIntoViewOptions = {
  
    // Animate the scrollIntoView() operation 
    animated: true,
    
    // By default, scrollIntoView() calls are throttled a bit because it does not make much sense
    // to scrollIntoView() 2 elements at the same time (and sometimes even impossible)
    immediate: false,

  };
  

class ScrollSection extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ScrollView
                ref={ref => this._scrollViewref = ref}
                nestedScrollEnabled={true}
                alwaysBounceVertical={true}
            >
                {this.props.sections.map(section => (
                    <Section key={section.id}  id={section.id} name={section.name} dishes={section.dishes} />
                ))}
            </ScrollView>
        )
    }
}

const CustomScroll = ScrollIntoViewWrapper(ScrollSection)

export  default class  SectionList extends Component{
    constructor(props){
        super(props);
    }
    scrollTo = () => {
        console.log('test');
        
       this._scrollViewref.scrollTo({x:0, y :225})
      }
      renderScrollView(){

      }
    render(){
        const { sections , offers } = this.props;
        return (
            <View style={{}} >
                <View style={{ display: "flex", flexDirection: 'row', backgroundColor: '#F2F5FC', marginVertical: 21 }} >
                    <View style={{ padding: 12, marginLeft: 20, borderWidth: 1, borderColor: '#F44336', borderRadius: 100 }}>
                        <Image style={{ width: 24, height: 24, alignContent: 'flex-start', padding: 12 }} source={require('../../assets/Offers.png')} />
                    </View>
                    <Text style={{ marginLeft: 12, textAlignVertical: 'center', textAlign: "center", fontSize: 12, fontFamily: 'open-sans-regular' }} > {offers.toString()} offers Avaliable </Text>
                </View>
                <View style={{ marginBottom: 16, backgroundColor: '#F2F5FC', height: 16, marginHorizontal: 0 }}  ></View>
                <CustomScroll sections={sections} scrollIntoViewOptions={scrollIntoViewOptions} />
            </View>
        )
    }
}