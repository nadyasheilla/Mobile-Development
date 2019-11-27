import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskTriple = () => {
    return(
      <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
      <Text style={styles.text}> 
      Triple Frontier is a 2019 American action-adventure film directed by J. C. Chandor, 
      with a screenplay by Chandor and Mark Boal, from a story by Boal. The film stars Ben Affleck, 
      Oscar Isaac, Charlie Hunnam, Garrett Hedlund, and Pedro Pascal as a group of former 
      U.S. Army Delta Force soldiers who reunite to plan a heist job of a South American crime lord.
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


export default ImageDeskTriple;