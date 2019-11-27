import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskHard = () => {
    return(
        <ImageBackground source={require('../assets/2.jpg')} style={{width: '100%', height: '50%'}}>
        <Text style={styles.text}> 
        The Hard Way is a 1991 American buddy cop action comedy film directed by John Badham, 
        and starring Michael J. Fox and James Woods. Stephen Lang, Annabella Sciorra, Luis Guzmán,
         LL Cool J, Delroy Lindo, Christina Ricci, Mos Def, Kathy Najimy
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


export default ImageDeskHard;