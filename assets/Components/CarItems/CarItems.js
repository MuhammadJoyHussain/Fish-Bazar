import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../StyledButton/Button';
import styles from './CarItemStyles';

const CarItems = (props) => {
    const { name, tagline, taglineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}{" "}<Text style={styles.subtitleCTA}>{taglineCTA}</Text></Text>
            </View>

            <View style={styles.buttonsContainer}>
            <Button type="primary" 
            content={"Custom Order"} 
            onPress={() => {}} 
            />

            <Button type="secondary" 
            content={"Existing inventory"} 
            onPress={() =>{}} 
            />
            </View>
        </View>
    );
};

export default CarItems;