import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskSH = () => {
    return(
        <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
            <Text style={styles.text}> 
            'Soul Hunter' refers to primal beliefs that stated a photograph can steal a soul.
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

export default ImageDeskSH;