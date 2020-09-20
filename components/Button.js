import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8, onPress: () => Alert.alert('Button Pressed!') };

const Button = ({title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginVertical:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#ffffff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#07192f'
  },
  text: {
    fontFamily: 'TampaBay',
    fontSize: 30,
    color: "#07192f",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default Button;