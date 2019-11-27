import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import ImageDetailAction from '../components/ImageDetailAction';
import { ScrollView } from 'react-native-gesture-handler';

const ImageScreenAction = ({navigation}) => {
      return (
      <View>
              <ImageBackground source={require('../assets/1.jpg')} style={{width: '100%', height: '100%'}}>
          <ScrollView>
          <View style = {styles.container}>
                  <View style={styles.tengah}>
                  <Text style={styles.text}>The Glorious Seven</Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('ImageGlorious')}>
                  <ImageDetailAction 
                  imageSource={require('../assets/02.jpg')}
                  />
                  </TouchableOpacity>
                </View>

                <View style={styles.tengah}>
                <Text style={styles.text}>ATONE</Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('ImageAtone')}>
                  <ImageDetailAction
                      imageSource={require('../assets/01.jpeg')}
                  />
                  </TouchableOpacity>
                </View>

                <View style={styles.tengah}>
                <Text style={styles.text}>Never Grow Old</Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('ImageGrow')}>
                  <ImageDetailAction 
                  imageSource={require('../assets/03.jpg')}
                  />
                  </TouchableOpacity>
                </View>

              <View style={styles.tengah}>
                  <Text style={styles.text}>The Hard Way</Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('ImageHard')}>
                  <ImageDetailAction 
                  imageSource={require('../assets/04.jpg')}
                  />
                  </TouchableOpacity>
                </View>

              <View style={styles.tengah}>
                  <Text style={styles.text}>Soul Hunters</Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('ImageSH')}>
                  <ImageDetailAction 
                  imageSource={require('../assets/05.jpg')}
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
          display: 'flex'
        
      },
  tengah:{ 
      width: "55%",
      height: "15%",
      marginVertical:15,
      overflow: 'hidden', 
      borderRadius: 30
  }, 
  text:{
      fontStyle: 'normal',
      color:'white',
      textAlign: 'center',
      fontSize : 25,
      fontWeight: 'bold',
  }
  })

export default ImageScreenAction;