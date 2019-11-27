import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import ImageDetailRomance from '../components/ImageDetailRomance';
import { ScrollView } from 'react-native-gesture-handler';

const ImageScreenRomance = ({navigation}) => {
    return (
        <View>
               <ImageBackground source={require('../assets/1.jpg')} style={{width: '100%', height: '100%'}}>
           <ScrollView>
           <View style = {styles.container}>
                   <View style={styles.tengah}>
                   <Text style={styles.text}>White Snake</Text>
                   <TouchableOpacity onPress={()=> navigation.navigate('ImageSnake')}>
                   <ImageDetailRomance
                   imageSource={require('../assets/21.png')}
                   />
                   </TouchableOpacity>
                 </View>

                 <View style={styles.tengah}>
                 <Text style={styles.text}>Love on the Menu</Text>
                 <TouchableOpacity onPress ={()=> navigation.navigate('ImageLove')}>
                   <ImageDetailRomance
                       imageSource={require('../assets/22.jpg')}
                   />
                   </TouchableOpacity>
                 </View>
   
                 <View style={styles.tengah}>
                 <Text style={styles.text}>Finding Steve McQueen</Text>
                 <TouchableOpacity onPress ={()=> navigation.navigate('ImageFinding')}>
                   <ImageDetailRomance 
                   imageSource={require('../assets/23.jpeg')}
                   />
                   </TouchableOpacity>
                 </View>
   
               <View style={styles.tengah}>
                   <Text style={styles.text}>Fall in Love at First Kiss</Text>
                   <TouchableOpacity onPress ={()=> navigation.navigate('ImageKiss')}>
                   <ImageDetailRomance 
                   imageSource={require('../assets/24.jpg')}
                   />
                   </TouchableOpacity>
                 </View>
   
               <View style={styles.tengah}>
                   <Text style={styles.text}>white Snake</Text>
                   <TouchableOpacity onPress ={()=> navigation.navigate('ImageSnakes')}>
                   <ImageDetailRomance 
                   imageSource={require('../assets/21.png')}
                   />
                   </TouchableOpacity>
                 </View>
           </View>
           </ScrollView>
           </ImageBackground>
       </View>
       )
   };
   
   const styles = StyleSheet.create({
       container: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
       },
   tengah:{
    width: "50%",
    height: "15%",
    marginVertical:15, 
    overflow: 'hidden', 
    borderRadius: 25,
    
   }, 
   text:{
    fontStyle: 'normal',
    color:'white',
    textAlign: 'center',
    fontSize : 25,
    fontWeight: 'bold', 
   
   }
   })

export default ImageScreenRomance;