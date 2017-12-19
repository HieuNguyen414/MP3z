import { Dimensions } from "react-native";

var {height, width} = Dimensions.get('window');

const styles = ({
  container: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    alignItems:'center',
    justifyContent:'center'
  },
  imagecoffee:{
    marginTop: 10, 
    marginRight: 7.5, 
    marginLeft:7.5
  },
  imgcoffee1:{
   width, 
   height:100,
   borderColor:'grey',
   borderWidth:0.1,
   borderTopLeftRadius:5,
   borderTopRightRadius:5, 
  },
  imgcoffee2:{
    width, 
    height:100,
    borderColor:'grey',
    borderWidth:0.1,
    marginTop: 2, 
    marginBottom:2
   },
   imgcoffee3:{
    width, 
    height:100,
    borderColor:'grey',
    borderWidth:0.1,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5, 
   },
   textcfcuoituan:{
     textAlign:'center',
     padding: 5, marginTop: 15,
     fontSize:18,
     fontWeight:'bold'
   },
   textchunhat:{
    textAlign:'center',
   },
   thumbnail_cf:{
    width: 50, 
    height: 50, 
    position:'absolute', 
    borderColor:'transparent', 
    borderRadius:5, 
    left:10, 
    bottom: 10
   },
   text1_cfcuoituan:{
    color:'white',
    marginLeft: 60,
    position:'absolute', 
    bottom: 10, left:10
   },
   img_cfcuoituan:{
    position:'absolute', 
    bottom: 10, 
    right:10
   },
   view_xemthemplaylist:{
    flexDirection:'row', 
    padding: 10,
    marginRight:7.5,
    marginLeft:7.5
   },
   text_xemthemplaylist:{
    marginLeft: 10
   },
   view_zingChatRealTime:{
   position:'relative',
    marginLeft:7.5, 
    marginRight:7.5,
    flexDirection:'row',
    marginBottom:5,
    marginTop:5
   },
   view_3Casi:{
    marginLeft:7.5,
    marginRight:7.5,
    height:90, 
    flexDirection:'row', 
    marginTop: 20, 
    alignItems:'flex-end',
   },
   view_3Casi_all:{
     flex:1/3,
     justifyContent:'center',
     alignItems:'center'
   },
   text_TenCaSi:{
     fontSize:13,
     marginTop:5
   },
   imgCaSi:{
     height:60,
     width:60
   },
   img_playzingchatRT:{
     marginLeft:10
   },
   text1_chatRT:{
     fontWeight:'bold',
     fontSize:18,
   },
   img_Back_Jusstatee:{
    width, 
    height:100,
    
   },
   view_Sing_JT:{
    position:'relative'
   },
   thumbnail_jussta:{
    width: 60, 
    height: 60, 
    borderColor:'transparent', 
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center' 
   },
   txt_justa:{
     color:'white',
     fontSize:13,
     marginLeft:10
   },
   imgSwiper:{
     height:150,
     width, padding:5
   },
   text1Justa:{
     fontSize:16
   },
   thongkengay:{
     marginTop:8,
     marginLeft:7.5,
     marginRight:7.5,
     backgroundColor:'#f4f5f7', 
     padding:5, 
     marginBottom:8,
   },
   touch_Jusstatee:{
    marginLeft:7.5, 
    marginRight:7.5
   },
   view_BackgroundJusta:{
    position:'relative', 
    marginTop:10
   },
   view_thumbJT:{
    position:'absolute', 
    flexDirection:'row', 
    bottom:10, 
    left:10
   },
   ngaythangthongke:{
    marginLeft: 10, 
    fontSize:18, 
    fontWeight:'bold'
   },
   
   // LIST MUSIC
   view_Listnhac:{
    flexDirection:'row', 
    backgroundColor:'#fff', 
    marginRight:7.5, 
    marginLeft:7.5, 
    position:'relative', 
    padding:5,
    marginBottom:6, marginTop:10
   },
   text_Number:{
    marginLeft:8,
    color:'green',
    padding:5, marginRight:8
   },
   img_dotListnhac:{
     position:'absolute',
     right:8,
   },
   img_iconListnhac:{
     position:'absolute',
     right:55
   },
   imgCasi_Listnhac:{
    height:35, 
    width:35,
    marginRight:10
   },
   //ZING CHAT TUẦN
   Zingchat:{
     marginLeft:7.5,
     marginRight:7.5,
     padding:10, 
     marginTop:10
   },
   viewBxh:{
    flexDirection:'row', 
    marginTop:10
   },
   viewImageBxh:{
    backgroundColor:'red', 
    flex:1/2, height:110, 
    justifyContent:'center', 
    alignItems:'center', 
    marginRight:10,
  
   },
   img4:{
    height:110, 
    width, 
    resizeMode:'stretch', 
    position:'absolute', 
    zIndex:1,

   }
});
  export default styles;