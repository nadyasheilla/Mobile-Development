import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen= ({navigation}) => {

     return (
 
        <View style={styles.container}>
             <ImageBackground source={require('../assets/3.jpg')} style={{width: '100%', height: '100%'}}>

         <View style={styles.container} >
            
              <View style={styles.tengah}>
                  <Button style={styles.Button}
                     text color = 'White'
                     title="Action Film 2019"
                     onPress={()=> navigation.navigate('ImageAction')}
                    />
              </View>
 
              <View style={styles.tengah}>
                  <Button style={styles.Button}
                  text color = 'White'
                  title="Romance Film 2019"
                  onPress={()=> navigation.navigate('ImageRomance')}
                  />
              </View>
              
              <View style={styles.tengah}>
                  <Button style={styles.Button}
                  text color = 'White'
                  title="Featured Film 2019"
                  onPress={()=> navigation.navigate('ImageFeatured')}
                  />
               </View>

            </View>
         </ImageBackground>  
     </View>
   
     )};
 
     const styles = StyleSheet.create({
         container: {
             height: '15%',
             flex: 1,
             justifyContent: 'center',
             alignItems: 'center'
         },
     tengah:{
         width: "70%",
         marginVertical:5
         
     }, 
     })
 

export default HomeScreen;
