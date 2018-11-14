import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {} from 'react-redux'
import Main from './src/screens/main'
import  {  Provider } from 'react-redux'
import store from './redux/index'
import { Font } from 'expo'
export default class App extends React.Component {
  componentWillMount(){
    Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store} >
          <Main />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
