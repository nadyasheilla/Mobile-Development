import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetailRomance = ({imageSource, title, rating}) => {
    return(
        <View>
            <Image 
                style={{width: 200, height: 200}}
                source={imageSource}
            />
            <Text>{title}</Text>
        </View>
    )
};

export default ImageDetailRomance;