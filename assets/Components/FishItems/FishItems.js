import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../StyledButton/Button';
import styles from './FishItemStyles';

const FishItems = (props) => {
    const { name, tagline, taglineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}{" "}</Text>
            </View>

            <View style={styles.buttonsContainer}>
            <Button type="primary" 
            content={"Order Now"} 
            onPress={() => {}} 
            />

            </View>
        </View>
    );
};

export default FishItems;