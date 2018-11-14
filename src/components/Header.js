import React , {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props){
        super(props);

    }
   
    render(){
        return (
            <View style={{display:'flex', width:360,paddingTop:8, paddingHorizontal:16}}>
                <Text style={{fontSize:12,fontWeight:'bold', fontFamily:'open-sans-bold',textAlign:'left'}}  >{this.props.title}</Text>
                <Text style={{fontSize:12, fontWeight:'normal', fontFamily:'open-sans-regular'}}>{this.props.disc}</Text>
            </View>
        )
        
    }
} 


export default connect(null, {  })(Header)