import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Tab, Icon,
    Tabs, Left, Right, Body, TabHeading,Text,Drawer } from 'native-base';
import HomeIndex from './HomeIndex';
import SwiperFlatList from 'react-native-swiper-flatlist';
const { width, height } = Dimensions.get('window');
import styles from './styles';
import Sidebar from '../Sidebar/Sidebar';

export default class Trangchu extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style = {{height:height/4}} >
            <SwiperFlatList
              autoplay
              autoplayDelay={0.2}
              autoplayLoop
              index={1}
              showPagination
              >
              <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                <Text style={styles.text}>1</Text>
              </View>
              <View style={[styles.child, { backgroundColor: 'thistle' }]}>
                <Text style={styles.text}>2</Text>
              </View>
              <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                <Text style={styles.text}>3</Text>
              </View>
              <View style={[styles.child, { backgroundColor: 'teal' }]}>
                <Text style={styles.text}>4</Text>
              </View>
            </SwiperFlatList>
          </View>
            {/* cà phê cuối tuần*/}
            <View>
              <Text style = {styles.textcfcuoituan}>CÀ PHÊ CUỐI TUẦN</Text>
              <Text style = {styles.textchunhat}>Ngày chủ nhật nhâm nhi tách cà phê cùng bạn bè</Text>
            </View>

            {/* 3 ảnh ghép chung */}
            <View style = {styles.imagecoffee}>
                {/* ảnh1 */}
              <TouchableOpacity>
                <View>
                  <Image  
                    source = {require('../../img/coffee1.png')} 
                    style ={styles.imgcoffee1}>
                  </Image>
                </View>
              </TouchableOpacity>
              
              {/* ảnh2 */}
              <TouchableOpacity>
                <View>
                  <Image 
                    source = {require('../../img/coffee2.png')} 
                    style ={styles.imgcoffee2}>
                  </Image>
                </View>
              </TouchableOpacity>

              {/* ảnh3 */}
              <TouchableOpacity>
                <View>
                  <Image
                    source = {require('../../img/coffee3.jpg')} 
                    style ={styles.imgcoffee3}>
                  </Image>
                </View>
              </TouchableOpacity>

              {/* xem thêm playlist  */}
              <TouchableOpacity >
                <View style = {{flexDirection:'row', padding: 10}}>
                  <Image source = {require('../../img/4block.png')}/> 
                  <Text style = {{marginLeft: 10}}>Xem thêm playlist</Text>
                </View>
              </TouchableOpacity>

              {/* zing chat real-time */}
              <View style = {{backgroundColor:'black', height:height/4}}>
              </View>

              {/* 3 ca sĩ */}
              <View style = {{width, height:80, flexDirection:'row'}}>
                <View style = {styles.threecasi}>
                  <Image source = {require('../../img/baoanh.jpeg')}
                     style = {{width:60, height:60}}/>
                  <Text>Bảo Anh</Text>
                </View>
                <View>
                  <Image source = {require('../../img/phuocthinh.jpg')} 
                    style = {{width:60, height:60}}/>
                  <Text>Noo Phước Thịnh</Text>
                </View>
                <View>
                  <Image source = {require('../../img/jusstatee.jpg')}
                    style = {{width:60, height:60}}/>
                  <Text>JusstaTee</Text>
                </View>
              </View>

              {/* thống kê ngày */}
              <TouchableOpacity >
                <View style = {{flexDirection:'row', padding: 10}}>
                  <Image source = {require('../../img/4block.png')}/> 
                  <Text style = {{marginLeft: 10}}>26.11.2017 - 14:00</Text>
                </View>
              </TouchableOpacity>
            </View>

        </Content>
      </Container>
    );
}
}
