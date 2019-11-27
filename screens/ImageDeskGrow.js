import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskGrow = () => {
    return(
      <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
      <Text style={styles.text}> 
      Never Grow Old is an 2019 American-Irish-French Western film, written and directed by Ivan Kavanagh. 
      It stars Emile Hirsch, Deborah Francois, John Cusack, Danny Webb, Tim Ahern and Sam Louwyck. 
      It was released on March 15, 2019, by Saban Films.          
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
  fontSize : 15,
  fontWeight: 'bold',
  }
})  


export default ImageDeskGrow;