import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskAtone = () => {
    return(
        <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
        <Text style={styles.text}> 
        Former special ops soldier, Laura Bishop, shows up for work at the largest church in America 
        and is forced to take down a team of hijackers when she learns her daughter is trapped inside
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
    fontSize : 18,
    fontWeight: 'bold',
    }
})  


export default ImageDeskAtone;