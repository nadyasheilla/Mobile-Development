import React from 'react';
import { Text, View,Image, ImageBackground, StyleSheet,TouchableOpacity } from 'react-native';
import ImageDetailFeatured from '../components/ImageDetailFeatured';
import { ScrollView } from 'react-native-gesture-handler';

const ImageScreenFeatured = ({navigation}) => {
   return (
      <View>
             <ImageBackground source={require('../assets/1.jpg')} style={{width: '100%', height: '100%'}}>
         <ScrollView>
         <View style = {styles.container}>
                 <View style={styles.tengah}>
                 <Text style={styles.text}>Happy Death Day 2U</Text>
                 <TouchableOpacity onPress ={() => navigation.navigate('ImageDeath')}>
                 <ImageDetailFeatured
                 imageSource={require('../assets/11.jpg')}
                 />
                 </TouchableOpacity>
               </View>
 
               <View style={styles.tengah}>
               <Text style={styles.text}>The Kid Who Would Be King</Text>
               <TouchableOpacity onPress ={()=> navigation.navigate('ImageKid')}>
                 <ImageDetailFeatured
                     imageSource={require('../assets/12.jpeg')}
                 />
                 </TouchableOpacity>
               </View>
 
               <View style={styles.tengah}>
               <Text style={styles.text}>IO Last On Earth</Text>
               <TouchableOpacity onPress={()=> navigation.navigate('ImageIO')}>
                 <ImageDetailFeatured 
                 imageSource={require('../assets/13.jpeg')}
                 />
                 </TouchableOpacity>
               </View>
 
             <View style={styles.tengah}>
                 <Text style={styles.text}>Extreme Job</Text>
                 <TouchableOpacity onPress ={()=> navigation.navigate('ImageExtreme')}>
                 <ImageDetailFeatured 
                 imageSource={require('../assets/14.jpeg')}
                 />
                 </TouchableOpacity>
               </View>
 
             <View style={styles.tengah}>
                 <Text style={styles.text}>Triple Frontier</Text>
                 <TouchableOpacity onPress ={()=> navigation.navigate('ImageTriple')}>
                 <ImageDetailFeatured
                 imageSource={require('../assets/15.jpeg')}
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
         alignItems: 'center'
     },
 tengah:{
  width: "55%",
  height: "15%",
  marginVertical:15,
  overflow: 'hidden', 
  borderRadius: 20
 }, 
 text:{
  fontStyle: 'normal',
  color:'white',
  textAlign: 'center',
  fontSize : 25,
  fontWeight: 'bold', 
    
 }
 })

export default ImageScreenFeatured;