import React from 'react';
import { Text, View, Button, Image, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/b.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Home Screen</Text>
           <Image
                style={{width: 200, height: 200}}
                source={require('../assets/download.jpg')}
            />
           <Button 
                title="List"
                onPress={() => navigation.navigate('Genre')}
           />
       </View>
    </ImageBackground>
    );
};

export default HomeScreen;