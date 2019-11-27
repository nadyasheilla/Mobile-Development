import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskIO = () => {
    return(
      <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
      <Text style={styles.text}> 
      Io is a 2019 American science fiction film directed by Jonathan Helpert. 
      It stars Margaret Qualley, Anthony Mackie and Danny Huston. 
      It was released on January 18, 2019, by Netflix.
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
  fontSize : 16,
  fontWeight: 'bold',
  }
})  


export default ImageDeskIO;