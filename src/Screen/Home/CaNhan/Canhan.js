import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

export default class Canhan extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style = {{position:'absolute', right:0, top:0, left:0, bottom:0}}>
        <Image 
          style ={{flex:1, flexDirection:'column', width:null, height:null, backgroundColor:'transparent', justifyContent:'center'  }}
          source = {require('../../../img/nguoidungback.jpg')}/>
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


