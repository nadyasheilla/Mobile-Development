import React from 'react';
import { Text, StyleSheet, FlatList, View, ImageBackground} from 'react-native';

const Genres = [
    {Judul: 'Judul1', Sinopsis: 'Unknown'},
    {Judul: 'Judul2', Sinopsis: 'Unknown'},
    {Judul: 'Judul3', Sinopsis: 'Unknown'},
    {Judul: 'Judul4', Sinopsis: 'Unknown'}
]

const Genreaction = () => {
    return (
        <ImageBackground source={require('../assets/a.jpg')} style={{width: '100%', height: '100%'}}>
        <FlatList 
            data={Genres}
            renderItem={({ item }) => 
                <View style={styles.textStyle}>
                    <Text >
                        {item.Film}
                    </Text>
                    <Text>
                        {item.Judul}
                    </Text>
                </View>
            }
            keyExtractor={item => item.Film}
        />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default Genreaction;