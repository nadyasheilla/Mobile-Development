import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskSnake = () => {
    return(
      <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
      <Text style={styles.text}> 
      White Snake is a 2019 Chinese computer animation fantasy film directed by Amp Wong and Zhao Ji, 
      with animation production by Light Chaser Animation. The film was inspired by the traditional Chinese 
      fable Legend of the White Snake, serving as a prequel to the original story,
      and was released in China on January
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


export default ImageDeskSnake;