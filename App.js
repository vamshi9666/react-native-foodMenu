import React , {Component} from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation';
import Header from './src/components/Header';
import { Main,Samosa, Chat,Biryani, Puff  } from './src/screens'
import store from './redux/index'
import axios from 'axios'
import BASE_URL from './src/config';
import {  Provider} from 'react-redux'
const Tabs = createMaterialTopTabNavigator(
  {
    Home: Main,
    Snacks: Samosa,
    chat: Chat,
    biryani: Biryani,
    puff: Puff
  }, {
    tabBarOptions: {
      scrollEnabled: true
    }
  });
 class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
   render() {
     return (
       <Provider store={store}>
         <View style={{ marginTop: 20, flex: 1 }}>
           <Header title={'hey'} />
           <Tabs />
         </View>
       </Provider>
     )
   }
 }

export default App;