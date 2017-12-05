import React, { Component } from 'react';
import { Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Tab, Icon,
   Tabs, Left, Right, Body, TabHeading,Text } from 'native-base';
import Trangchu from './Trangchu';
import Canhan from './Canhan';

export default class HomeIndex extends Component{
  render() {
    return (
      <Container>
        {/* initialPage: đặt tab mặc định hiển thị */}
        <Tabs 
            initialPage={1} 
            style = {styles.homeTab}
            tabBarPosition = {'top'} 
            tabBarUnderlineStyle={{ backgroundColor: 'black'}}
            > 
            {/* icon menu */}
          <Tab heading={ 
            <TabHeading style = {{backgroundColor:'#fff'}}>
              <TouchableOpacity>
               <Image source = {require('../../img/home_menu.png')} />
              </TouchableOpacity>
            </TabHeading>}>
          </Tab>
            {/* tab trang chủ */}
          <Tab 
            heading="TRANG CHỦ" 
            tabStyle={{backgroundColor: 'white'}}// màu của tab 
            textStyle={{color: 'black', fontSize: 13}} // màu chữ
            activeTabStyle={{backgroundColor: '#fff'}} // màu của tab khi đã click
            activeTextStyle={{color: 'purple',fontSize: 13}} // màu chữ khi đã click  
            tabBarUnderlineStyle={{ backgroundColor: 'black'}}
            > 
              <Trangchu />
          </Tab>
            {/* tab cá nhân */}
          <Tab
            heading="CÁ NHÂN" 
            tabStyle={{backgroundColor: 'white'}}
            textStyle={{color: 'black', fontSize: 13}} 
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{color: 'purple',fontSize: 13}}
            >
            <Canhan />
          </Tab>
            {/* icon search */}
          <Tab heading={ 
            <TabHeading style = {{backgroundColor:'#fff'}}>
              <TouchableOpacity>
                <Image source = {require('../../img/home_search.png')}/>
              </TouchableOpacity>
            </TabHeading>}>
          </Tab>
        </Tabs> 
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  homeTab:{
    marginRight:35
    
  }
})