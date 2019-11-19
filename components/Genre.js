import React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import Genreaction from './GenreAction';

const GenreAction = ({ navigation }) => {
    return (
     <ImageBackground source={require('../assets/download.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Home Screen</Text>
           <Button 
                title="Action"
                onPress={() => navigation.navigate('GenreAction')}
           />
           <Button 
                title="Horror"
                onPress={() => navigation.navigate('GenreHorror')}
           />
           <Button 
                title="Fantasy"
                onPress={() => navigation.navigate('GenreFantasy')}
            />
       </View>
       </ImageBackground>
    );
};

export default GenreAction;