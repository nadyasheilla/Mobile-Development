import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetailAction = ({imageSource, title, rating}) => {
    return(
        <View>
            <Image 
                style={{width: 220, height: 170}}
                source={imageSource}
            />
            <Text>{title}</Text>
        </View>
    )
};

export default ImageDetailAction;