import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, requireNativeComponent, Alert } from 'react-native';
import Header from './components/Header';
import Button from './components/Button';
import { useFonts } from "@use-expo/font";
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import { Component } from 'react';




export default class App extends Component {
  state = {
    fontLoaded: false
  }

  componentDidMount() {
    this.loadAssetsAsync()
  }

  loadAssetsAsync = async () => {
    await Font.loadAsync({
      'TampaBay': require('./assets/fonts/TampaBay.ttf')
    })
    this.setState({ fontLoaded: true })
  }
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <Image source={require('./images/logo.png')} style={styles.img}/>
        <View style={{paddingTop: 75}}>
          <Text style={styles.text}>Schedule Creator</Text>
          <View style={{paddingTop: 30}}>
              <Button
                title = "INPUT TEAM INFO"
              />
              <Button
                title = 'IMPORT FROM EXISTING LEAGUE'
              />
          </View>
        </View>
      </View>
      
      
    );

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: '#A29E9E',
    alignItems: 'center',
  },
  text: {
    fontFamily: "TampaBay",
    fontSize: 65,
    color: '#de2138',
     },
  // button: {
  //   color: '#de2138',
  //   backgroundColor: '#bac3c3',
  //   marginTop: 20,
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: '#de2138',
  // },
  img: {
    width: 500,
    height: 500,
  }
});
