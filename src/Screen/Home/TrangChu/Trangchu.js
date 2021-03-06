import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Tab, Icon,
    Tabs, Left, Right, Body, TabHeading,Text,Drawer } from 'native-base';
import HomeIndex from '../HomeIndex';
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
          <View>
            <SwiperFlatList 
              autoplay = {true}
              autoplayDelay={0.2}
              autoplayLoop
              index={1}
              showPagination = {true}
              paginationActiveColor = {'green'}
              paginationDefaultColor = {'grey'}
              autoplayLoop = {true}
              >
              <View>
                <Image 
                  style = {styles.imgSwiper}
                  source = {require('../../../img/swiper-1.jpg')}/>
              </View>
              <View >
                <Image 
                  style = {styles.imgSwiper}
                  source = {require('../../../img/swiper-5.jpg')}/>
              </View>
              <View>
                <Image 
                  style = {styles.imgSwiper}
                  source = {require('../../../img/swiper-3.jpg')}/>
              </View>
              <View >
                <Image 
                  style = {styles.imgSwiper}
                  source = {require('../../../img/swiper-4.jpg')}/>
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
              <View style = {{position: 'relative'}}>
                <Image  
                  source = {require('../../../img/coffee1.png')} 
                  style ={styles.imgcoffee1}>
                </Image>
              </View>
              <View>
                <Image 
                  style = {styles.thumbnail_cf}
                  source = {require('../../../img/caphe1minh.jpg')}/>
                <Text style = {styles.text1_cfcuoituan}>Cà Phê Cùng Bạn Bè</Text>
                <Image style = {styles.img_cfcuoituan} source = {require('../../../icon/play-icon.png')}/>
              </View>
            </TouchableOpacity>
            
              {/* ảnh2 */}
            <TouchableOpacity>
              <View>
                <Image 
                  source = {require('../../../img/coffee2.png')} 
                  style ={styles.imgcoffee2}>
                </Image>
              </View>
              <View>
                <Image 
                  style = {styles.thumbnail_cf}
                  source = {require('../../../img/caphevoibanbe.jpg')}/>
                <Text style = {styles.text1_cfcuoituan}>Cà Phê Cùng Nhạc Phim</Text>
                <Image style = {styles.img_cfcuoituan} source = {require('../../../icon/play-icon.png')}/>
              </View>
            </TouchableOpacity>

              {/* ảnh3 */}
            <TouchableOpacity>
              <View>
                <Image
                  source = {require('../../../img/coffee3.jpg')} 
                  style ={styles.imgcoffee3}>
                </Image>
              </View>
                {/* thumbail img cafe */}
              <View>
                <Image 
                  style = {styles.thumbnail_cf}
                  source = {require('../../../img/thuhanoi.jpg')}/>
                <Text style = {styles.text1_cfcuoituan}>Mùa Thu Hà Nội</Text>
                <Image style = {styles.img_cfcuoituan} source = {require('../../../icon/play-icon.png')}/>
              </View>
            </TouchableOpacity>
          </View>

            {/* xem thêm playlist  */}
          <TouchableOpacity>
            <View style = {styles.view_xemthemplaylist}>
              <Image source = {require('../../../icon/4block.png')}/> 
              <Text style = {styles.text_xemthemplaylist}>Xem thêm playlist</Text>
            </View>
          </TouchableOpacity>

            {/* zing chat real-time */}
          <View>
            <View style = {styles.view_zingChatRealTime}>
              <Text style = {styles.text1_chatRT}>ZING CHAT REAL-TIME</Text>
              <TouchableOpacity>
                 <Image style = {styles.img_playzingchatRT} source = {require('../../../icon/play-icon.png')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style = {{marginLeft:70}}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {{height:height/4,backgroundColor:'black',marginRight: 7.5,marginLeft:7.5, marginTop:10}}></View>
          
            {/* 3 ca sĩ */}
          <View >
            <View style = {styles.view_3Casi}>
            
              <View style = {styles.view_3Casi_all}>
                <TouchableOpacity>
                  <Image source = {require('../../../img/baoanh.jpeg')}
                    style = {styles.imgCaSi}/>
                </TouchableOpacity>
                <Text style = {styles.text_TenCaSi}>Bảo Anh</Text>
              </View>
              
              <View  style = {styles.view_3Casi_all}>
                <TouchableOpacity>
                  <Image source = {require('../../../img/phuocthinh.jpg')} 
                    style = {styles.imgCaSi}/>
                </TouchableOpacity>
                <Text style = {styles.text_TenCaSi}>Noo Phước Thịnh</Text>
              </View>

              <View style = {styles.view_3Casi_all}>
                <TouchableOpacity style = {{alignItems:'center', justifyContent:'center'}}>
                  <Image source = {require('../../../img/jusstatee.jpg')}
                    style = {styles.imgCaSi}/>
                </TouchableOpacity>
                <Text style = {styles.text_TenCaSi}>JusstaTee</Text>
              </View>
            </View> 
          </View>

            {/* sing of JusstaTee */}
          <TouchableOpacity style = {styles.touch_Jusstatee}>
            <View style = {styles.view_BackgroundJusta}>
              <Image
                source = {require('../../../img/back-jusstatee.jpg')}
                style = {styles.img_Back_Jusstatee}
              />
            </View>
            
            <View style = {styles.view_thumbJT}>
              <Image 
                style = {styles.thumbnail_jussta}
                source = {require('../../../img/jussta-thumb.jpg')}/>
                <View style = {{marginLeft:7}}>
                  <Text style  = {[styles.txt_justa, styles.text1Justa]} >Đã lỡ yêu em nhiều</Text>
                  <Text style  = {styles.txt_justa}>JusstaTee</Text>
                  <Text style  = {styles.txt_justa}>Chạm đỉnh Zing: 0 lần</Text>
                </View>
            </View>
          </TouchableOpacity>

            {/* thống kê ngày */}
          <View>
            <TouchableOpacity style = {styles.thongkengay}>
              <Text style = {styles.ngaythangthongke}>26.11.2017 - 14:00</Text>
            </TouchableOpacity>
          </View>

           {/* list nhạc */}
          <View>

              {/* 1st Music - BaoAnh */}
            <View style = {styles.view_Listnhac}>
              <Text style = {styles.text_Number}>01</Text>
              <Image style = {styles.imgCasi_Listnhac} 
                source = {require('../../../img/baoanh.jpeg')}/>
                <View>
                  <Text>Sống Xa Anh Chẳng D...</Text>
                  <Text>Bảo Anh</Text>
                </View>
              <Image 
                style = {styles.img_iconListnhac}
                source = {require('../../../icon/music-player.png')}/>
              <Image 
                style = {styles.img_dotListnhac}
                source = {require('../../../icon/more.png')}/>
            </View>
              {/* 2nd Music - PhuocThinh */}
            <View style = {styles.view_Listnhac}>
              <Text style = {{marginLeft:8,color:'red',padding:5, marginRight:8}}>02</Text>
              <Image style = {styles.imgCasi_Listnhac} 
                source = {require('../../../img/phuocthinh.jpg')}/>
                <View>
                  <Text>Chạm Khẽ Tim Anh M...</Text>
                  <Text>Noo Phước thịnh</Text>
                </View>
              <Image 
                style = {styles.img_iconListnhac}
                source = {require('../../../icon/music-player.png')}/>
              <Image 
                style = {styles.img_dotListnhac}
                source = {require('../../../icon/more.png')}/>
            </View>

              {/* 3th Music - Jusstatee */}
            <View style = {styles.view_Listnhac}>
              <Text style = {{marginLeft:8,color:'yellow',padding:5, marginRight:8}}>03</Text>
              <Image style = {styles.imgCasi_Listnhac} 
                source = {require('../../../img/jussta-thumb.jpg')}/>
                <View>
                  <Text>Đã Lỡ Yêu Em Nhiều</Text>
                  <Text>JusstaTee</Text>
                </View>
              <Image 
                style = {styles.img_iconListnhac}
                source = {require('../../../icon/music-player.png')}/>
              <Image 
                style = {styles.img_dotListnhac}
                source = {require('../../../icon/more.png')}/>
            </View>
              {/* 4th Music - HuongTram */}
            <View style = {styles.view_Listnhac}>
              <Text style = {{marginLeft:8,color:'orange',padding:5, marginRight:8}}>04</Text>
              <Image style = {styles.imgCasi_Listnhac} 
                source = {require('../../../img/huongtram.jpg')}/>
                <View>
                  <Text>Em Gái Mưa</Text>
                  <Text>Hương Tràm</Text>
                </View>
              <Image 
                style = {styles.img_iconListnhac}
                source = {require('../../../icon/music-player.png')}/>
              <Image 
                style = {styles.img_dotListnhac}
                source = {require('../../../icon/more.png')}/>
            </View>
          </View>

            {/* bảng xếp hạng */}
          <View style = {styles.Zingchat}>
            <Text style = {styles.ngaythangthongke}>ZING CHAT TUẦN</Text>
              {/* image chart - 4 img */}
            <View style = {styles.viewBxh}>
              <View style = {styles.viewImageBxh}>
                <Image 
                  style = {styles.img4}
                  source = {require('../../../img/vietnam.jpg')}
                  />
                  <View style = {{position:'absolute', zIndex:2}}>
                    <Text style = {{}}>BẢNG XẾP HẠNG</Text>
                    <Text style = {{}}>VIỆT NAM</Text>
                  </View>
              </View>

              <View style = {styles.viewImageBxh}>
                <Image 
                  style = {styles.img4}
                  source = {require('../../../img/aumy.jpg')}
                />
                <View style = {{position:'absolute', zIndex:2}}>
                  <Text style = {{}}>BẢNG XẾP HẠNG</Text>
                  <Text style = {{}}>ÂU MỸ</Text>
                </View>
              </View>
            </View>

            <View style = {styles.viewBxh}>
              <View style = {styles.viewImageBxh}>
                <Image 
                  style = {styles.img4}
                  source = {require('../../../img/hanquoc.jpg')}
                  />
                  <View style = {{position:'absolute', zIndex:2}}>
                    <Text style = {{}}>BẢNG XẾP HẠNG</Text>
                    <Text style = {{}}>HÀN QUỐC</Text>
                  </View>
              </View>

              <View style = {styles.viewImageBxh}>
                <Image 
                  style = {styles.img4}
                  source = {require('../../../img/hoaprox.jpg')}
                />
                <View style = {{position:'absolute', zIndex:2}}>
                  <Text style = {{}}>BẢNG XẾP HẠNG</Text>
                  <Text style = {{}}>TOP 100</Text>
                </View>
              </View>
            </View>
            
          </View>

          
        </Content>
      </Container>
    );
}
}
