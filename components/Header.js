import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={StyleSheet.header}>
            <Text style={StyleSheet.text}>{title}</Text>
        </View>
    );
};

Header.defaultProps = {
    title: 'Gametime Greatness',
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#bac3c3',
        alignSelf: 'flex-start'
    },
    text: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
    },
});

export default Header;