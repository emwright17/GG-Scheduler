import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert, Image } from "react-native";
import Header from '../components/Header';
import Button from '../components/Button';


const Landing = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Image source={require('../images/logo.png')} style={styles.img}/>
        <View style={{paddingTop: 75}}>
          <Text style={styles.text}>Schedule Creator</Text>
          <View style={{paddingTop: 30}}>
              <Button
                title = "INPUT TEAM INFO"
                onPress ={() => navigation.navigate('Input')}
              />
              <Button
                title = 'IMPORT FROM EXISTING LEAGUE'
              />
          </View>
        </View>
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
  
export default Landing;
  