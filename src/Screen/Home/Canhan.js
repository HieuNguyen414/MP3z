import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Canhan extends Component {
    state = {  }
    render() {
        return (
           <View style = {{position: 'relative',backgroundColor:'red', height: 300, width: 300}}>
                <Image 
                style ={{width: 150, height:150, position: 'absolute', top: 250}}
                source = {require('../../img/phuocthinh.jpg')}>

                </Image>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});


