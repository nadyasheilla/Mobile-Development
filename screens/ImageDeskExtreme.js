import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskExtreme = () => {
    return(
      <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
      <Text style={styles.text}> 
      Extreme Job is a 2019 South Korean action comedy film directed by Lee Byeong-heon, 
      starring Ryu Seung-ryong, Lee Hanee, Jin Seon-kyu, Lee Dong-hwi and Gong Myung. 
      The film was released on January 23, 2019.
          </Text>
          </ImageBackground>       
  )
  }; 
  
  const styles = StyleSheet.create({
  
  text:{
  padding: '20%',
  borderColor : 'white',
  color:'white',  
  textAlign: 'center',
  fontSize : 14,
  fontWeight: 'bold',
  }
})  


export default ImageDeskExtreme;