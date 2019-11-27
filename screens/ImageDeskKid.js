import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskKid = () => {
    return(
      <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
      <Text style={styles.text}> 
      The Kid Who Would Be King is a 2019 fantasy adventure film written and directed by Joe Cornish. 
      A British-American venture, the film stars Louis Ashbourne Serkis, Tom Taylor, Rebecca Ferguson, 
      and Patrick Stewart. The plot follows a young boy who finds King Arthur's legendary sword Excalibur, 
      and must then use it to stop an ancient enchantress from destroying the world.
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


export default ImageDeskKid;