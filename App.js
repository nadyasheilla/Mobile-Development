import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ImageScreenAction from './screens/ImageScreenAction';
import ImageScreenRomance from './screens/ImageScreenRomance';
import ImageScreenFeatured from './screens/ImageScreenFeatured';
import ImageDeskGlorious from './screens/ImageDeskGlorious';
import ImageDeskAtone from './screens/ImageDeskAtone';
import ImageDeskGrow from './screens/ImageDeskGrow';
import ImageDeskHard from './screens/ImageDeskHard';
import ImageDeskSH from './screens/ImageDeskSH';
import ImageDeskSnake from './screens/ImageDeskSnake';
import ImageDeskLove from './screens/ImageDeskLove';
import ImageDeskFinding from './screens/ImageDeskFinding';
import ImageDeskKiss from './screens/ImageDeskKiss';
import ImageDeskSnakes from './screens/ImageDeskSnakes';
import ImageDeskDeath from './screens/ImageDeskDeath';
import ImageDeskKid from './screens/ImageDeskKid';
import ImageDeskIO from './screens/ImageDeskIO';
import ImageDeskExtreme from './screens/ImageDeskExtreme';
import ImageDeskTriple from './screens/ImageDeskTriple';
import { TouchableOpacity } from 'react-native-gesture-handler';


const navigator = createStackNavigator({ 
  Home: HomeScreen,
  ImageAction: ImageScreenAction,
  ImageRomance: ImageScreenRomance,
  ImageFeatured: ImageScreenFeatured,
  ImageGlorious: ImageDeskGlorious,
  ImageAtone: ImageDeskAtone,
  ImageGrow: ImageDeskGrow,
  ImageHard: ImageDeskHard,
  ImageSH: ImageDeskSH,
  ImageSnake: ImageDeskSnake,
  ImageLove: ImageDeskLove,
  ImageFinding: ImageDeskFinding,
  ImageKiss: ImageDeskKiss,
  ImageSnakes: ImageDeskSnakes,
  ImageDeath: ImageDeskDeath,
  ImageKid: ImageDeskKid,
  ImageIO: ImageDeskIO,
  ImageExtreme: ImageDeskExtreme,
  ImageTriple: ImageDeskTriple
},{  
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Film Terkeren 2019',
    alignItems: 'center',
    justifyContent: 'center',

    headerStyle: {
    backgroundColor : 'White',
    Opacity : '2%'
    }
  }
});

export default createAppContainer(navigator);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


