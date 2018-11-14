import React , {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props){
        super(props);

    }
   
    render(){
        return (
            <View style={{display:'flex', width:360,paddingTop:8}}>
                <Text style={{fontSize:18,fontWeight:'bold',textAlign:'left'}}  >{this.props.title}</Text>
                <Text style={{fontSize:15, fontWeight:'normal'}}>{this.props.disc}</Text>
            </View>
        )
        
    }
} 


export default connect(null, {  })(Header)