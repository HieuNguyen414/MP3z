import { Dimensions } from "react-native";

var {height, width} = Dimensions.get('window');

const styles = ({
  container: {
    backgroundColor: 'white',
  },
  child: {
    height: height/4,
    width,
    justifyContent: 'center',
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
    marginTop: 2, marginBottom:2
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
   }
});
  export default styles;