import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, requireNativeComponent, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import { Component } from 'react';
import Landing from './views/Landing';
import Input from './views/Input';
import { color } from 'react-native-reanimated';


const Stack = createStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = " " options={{headerShown: false}} component={Landing}/>
          <Stack.Screen 
            name = "Input"
            component={Input}
            options={{
              title: "Gametime Greatness",
              headerTitleStyle: {
                fontFamily: "TampaBay",
                color: "#ffffff",
                alignSelf: "center",
                justifyContent: "center",
                fontSize: 50,
              },
              headerStyle: {
                backgroundColor: "#07192f",
              }
            }}
          />
            
        </Stack.Navigator>
      </NavigationContainer>
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
  img: {
    width: 500,
    height: 500,
  }
});
