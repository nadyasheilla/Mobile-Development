import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskKiss = () => {
    return(
      <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
      <Text style={styles.text}> 
      Fall in Love at First Kiss is a 2019 Taiwanese romance film directed by Frankie Chen. 
      The film is based on of Itazura na Kiss and stars Jelly Lin as Yuan Xiangqin, 
      a regular schoolgirl from the F class and Darren Wang as Jiang Zhishu, a smart student in the A class.
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


export default ImageDeskKiss;