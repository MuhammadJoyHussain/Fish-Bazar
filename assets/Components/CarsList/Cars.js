import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import styles from './CarListStyle';
import cars from "./CarList"
import CarItems from '../CarItems/CarItems';

const Cars = () => {
    return (
        <View style={styles.container}>
            <FlatList 
            data={cars}
            renderItem={({item}) => <CarItems car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default Cars;