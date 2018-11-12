import React , {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props){
        super(props);

    }
   
    render(){
        return (
            <View style={{display:'flex', justifyContent:'center'}}>
                <Text style={{fontSize:25, fontStyle:'normal'}}  >{this.props.title}</Text>
                <Text>{this.props.disc}</Text>
            </View>
        )
        
    }
} 


export default connect(null, {  })(Header)