import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class LogIn extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentStyle}>
                    <View style={styles.logoStyle}>
                        <Image 
                            style={styles.img}
                            source={require('../../images/Group 10.png')}
                        />
                    </View>
                    <Text style={styles.textStyle}>
                        candy
                    </Text>
                    <TouchableOpacity style={styles.bottomStyle}>
                        <Text >Simple Task Manager</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEEEE',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentStyle: {
        //backgroundColor: 'red',
        flexDirection: 'column' 
    },
    img: {
        
    },
    logoStyle: {
        width: 122,
        height: 157,
//backgroundColor: 'red'
    },
    textStyle: {
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: 36,
        alignSelf: 'center',
        color: '#243B6B'
    },
    bottomStyle: {

    }
});

export default LogIn;