import React , {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { get_data } from '../../redux/actions/app'

class Header extends Component {
    constructor(props){
        super(props);

    }
    componentWillMount(){
        this.props.get_data();
        }
    render(){
        return (
            <View style={{display:'flex', justifyContent:'center'}}>
                <Text style={{textAlign:"center"}} >{this.props.title}</Text>
            </View>
        )
        
    }
} 


export default connect(null, { get_data })(Header)