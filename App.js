import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Genre from './components/Genre';
import GenreAction from './components/GenreAction';


const navigator = createStackNavigator({
  Home: HomeScreen,
  Genre: Genre,
  GenreAction: GenreAction
 
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'MMovie',
    headerStyle: {
      backgroundColor: 'grey'
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
