import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Tab, Icon,
    Tabs, Left, Right, Body, TabHeading,Text,Drawer } from 'native-base';
import HomeIndex from './HomeIndex';
import SwiperFlatList from 'react-native-swiper-flatlist';
const { width, height } = Dimensions.get('window');
import styles from './styles';

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
            {/* swiper */}
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
                {/* background image cafe1 */}
              <View style = {{position: 'relative'}}>
                <Image  
                  source = {require('../../img/coffee1.png')} 
                  style ={styles.imgcoffee1}>
                </Image>
              </View>
                {/* thumbail img cafe */}
              <View>
                <Image 
                  style = {styles.thumbnail_cf}
                  source = {require('../../img/caphe1minh.jpg')}/>
                <Text style = {styles.text1_cfcuoituan}>Cà Phê Cùng Bạn Bè</Text>
                <Image style = {styles.img_cfcuoituan} source = {require('../../img/play-icon.png')}/>
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
                    {/* thumbail img cafe */}
              <View>
                <Image 
                  style = {styles.thumbnail_cf}
                  source = {require('../../img/caphevoibanbe.jpg')}/>
                <Text style = {styles.text1_cfcuoituan}>Cà Phê Cùng Nhạc Phim</Text>
                <Image style = {styles.img_cfcuoituan} source = {require('../../img/play-icon.png')}/>
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
                {/* thumbail img cafe */}
              <View>
                <Image 
                  style = {styles.thumbnail_cf}
                  source = {require('../../img/thuhanoi.jpg')}/>
                <Text style = {styles.text1_cfcuoituan}>Mùa Thu Hà Nội</Text>
                <Image style = {styles.img_cfcuoituan} source = {require('../../img/play-icon.png')}/>
              </View>
            </TouchableOpacity>
          </View>

            {/* xem thêm playlist  */}
          <TouchableOpacity>
            <View style = {styles.view_xemthemplaylist}>
              <Image source = {require('../../img/4block.png')}/> 
              <Text style = {styles.text_xemthemplaylist}>Xem thêm playlist</Text>
            </View>
          </TouchableOpacity>

            {/* zing chat real-time */}
          <View>
            <View style = {styles.view_zingChatRealTime}>
              <Text style = {styles.text1_chatRT}>ZING CHAT REAL-TIME</Text>
              <TouchableOpacity>
                 <Image style = {styles.img_playzingchatRT} source = {require('../../img/play-icon.png')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style = {{marginLeft:70}}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {{height:height/4, width, backgroundColor:'black',marginRight: 7.5,marginLeft:7.5}}></View>
          
            {/* 3 ca sĩ */}
          <View >
            <View style = {styles.view_3Casi}>
              <View style = {styles.view_3Casi_all}>
                <Image source = {require('../../img/baoanh.jpeg')}
                  style = {styles.imgCaSi}/>
                <Text style = {styles.text_TenCaSi}>Bảo Anh</Text>
              </View>
              <View  style = {styles.view_3Casi_all}>
                <Image source = {require('../../img/phuocthinh.jpg')} 
                  style = {styles.imgCaSi}/>
                <Text style = {styles.text_TenCaSi}>Noo Phước Thịnh</Text>
              </View>
              <View style = {styles.view_3Casi_all}>
                <Image source = {require('../../img/jusstatee.jpg')}
                  style = {styles.imgCaSi}/>
                <Text style = {styles.text_TenCaSi}>JusstaTee</Text>
              </View>
            </View> 
          </View>

          {/* sing of JusstaTee */}
          <TouchableOpacity >
            <View style = {{position:'relative'}}>
              <Image
                source = {require('../../img/back-jusstatee.jpg')}
                style = {styles.img_Back_Jusstatee}
              />
            </View>
            <View style = {{position:'absolute', flexDirection:'row'}}>
              <Image 
                style = {styles.thumbnail_jussta}
                source = {require('../../img/jussta-thumb.jpg')}/>
                <View style = {{marginLeft:7}}>
                  <Text style  = {styles.txt_justa} >Đã lỡ yêu em nhiều</Text>
                  <Text style  = {styles.txt_justa}>JusstaTee</Text>
                  <Text style  = {styles.txt_justa}>Chạm đỉnh Zing: 0 lần</Text>
                </View>
            </View>
          </TouchableOpacity>

           {/* thống kê ngày */}
           <View>
              <TouchableOpacity >
                  <Text style = {{marginLeft: 10}}>26.11.2017 - 14:00</Text>
              </TouchableOpacity>
            </View>
        </Content>
      </Container>
    );
}
}
