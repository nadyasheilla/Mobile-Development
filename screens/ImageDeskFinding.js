import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskFinding = () => {
    return(
        <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
        <Text style={styles.text}> 
        Finding Steve McQueen is a 2019 American heist thriller film directed by Mark Steven Johnson 
        and written by Ken Hixon and Keith Sharon. The film stars Travis Fimmel, Rachael Taylor, 
        Forest Whitaker, and William Fichtner, telling the story of a gang planning to steal
        millions of dollars from President Nixon's illegal political slush fund. 
        It was released in the United States on March 15, 2019, by Momentum Pictures. 
        The film is based on the United California Bank robbery.
            </Text>
            </ImageBackground>       
    )
    }; 
    
    const styles = StyleSheet.create({
    
    text:{
    padding: '13%',
    borderColor : 'white',
    color:'white',  
    textAlign: 'center',
    fontSize : 14,
    fontWeight: 'bold',
    }
})  


export default ImageDeskFinding;