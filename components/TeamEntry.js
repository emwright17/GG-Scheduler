import React from 'react';
import {View, Text, StyleSheet, TextInput, Keyboard} from 'react-native';

const TeamEntry = ({teamNum}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder= {"Team " + teamNum}
                style={styles.textInput}
                maxLength={18}
                onBlur={Keyboard.dismiss}
            />
        </View>
        
    );
};

TeamEntry.defaultProps = {
    title: '#',
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    textInput: {
        fontFamily: 'TampaBay',
        textAlign: 'center',
        backgroundColor:'#ffffff',
        borderRadius:10,
        borderWidth: 4,
        borderColor: '#07192f',
        height: 60,
        margin: 10,
        fontSize: 30,
    },
});

export default TeamEntry;