import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskDeath = () => {
    return(
      <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
      <Text style={styles.text}> 
      Happy Death Day 2U is a 2019 American science fiction black comedy slasher film written 
      and directed by Christopher Landon. It stars Jessica Rothe, Israel Broussard, Rachel Matthews, 
      Phi Vu, Suraj Sharma, Sarah Yarkin, Ruby Modine, and Steve Zissis. The film again follows 
      Tree Gelbman, who is accidentally transported to another dimension, where she must relive 
      a different version of the same day repeatedly as she tries to return home, while a new killer 
      is on the loose
          </Text>
          </ImageBackground>       
  )
  }; 
  
  const styles = StyleSheet.create({
  
  text:{
  padding: '15%',
  borderColor : 'white',
  color:'white',  
  textAlign: 'center',
  fontSize : 14,
  fontWeight: 'bold',
  }
})  


export default ImageDeskDeath;