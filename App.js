import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {} from 'react-redux'
import Main from './src/screens/main'
import  {  Provider } from 'react-redux'
import store from './redux/index'
export default class App extends React.Component {
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
