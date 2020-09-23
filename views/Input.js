import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import TeamEntry from '../components/TeamEntry';
import Button from '../components/Button'


const Input = () => {
    return (
        <View style={styles.container}>
            <Text style= {styles.text}>"Enter Team Names Below"</Text>
            <View style={styles.entryList}>
                <View style={{flex:1}}>
                    <TeamEntry teamNum={"1"}/>
                    <TeamEntry teamNum={"2"}/>
                    <TeamEntry teamNum={"3"}/>
                    <TeamEntry teamNum={"4"}/>
                    <TeamEntry teamNum={"5"}/>
                    <TeamEntry teamNum={"6"}/>
                </View>
                <View style={{flex:1}}>
                    <TeamEntry teamNum={"7"}/>
                    <TeamEntry teamNum={"8"}/>
                    <TeamEntry teamNum={"9"}/>
                    <TeamEntry teamNum={"10"}/>
                    <TeamEntry teamNum={"11"}/>
                    <TeamEntry teamNum={"12"}/>
                </View>
                
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title = ' Get your schedule'
                />    
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A29E9E',
        alignItems: 'center',
    },
    text: {
        fontFamily: "TampaBay",
        fontSize: 55,
        color: '#07192f',
        paddingTop: 100,
        textDecorationLine: 'underline',
        textDecorationColor: '#de2138',
    },
    entryList: {
        flex:1,
        flexDirection: 'row',
        width: 600,
        marginVertical: 100
    },
    buttonContainer: {
        flex: 1,
        paddingTop: 100,
        width: 300,
    },
  });
  
export default Input;
  