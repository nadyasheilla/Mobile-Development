import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskGlorious = () => {
    return(
    <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
            <Text style={styles.text}> 
                 Ex-millitary commander David Guerra is hired by shady millionaire 
                Anthony Levin to rescue his wife Valentina who was kidnapped by Javier Martinez, 
                leader of a guerrilla group.
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


export default ImageDeskGlorious;