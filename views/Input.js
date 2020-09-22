import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import Header from '../components/Header';


const Input = () => {
    return (
        <View style={styles.container}>
        </View>
    );
};

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
  
export default Input;
  