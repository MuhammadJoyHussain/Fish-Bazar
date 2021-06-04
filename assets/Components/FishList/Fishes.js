import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import styles from './FishListStyle';
import cars from "./FishList"
import FishItems from '../FishItems/FishItems';

const Fishes = () => {
    return (
        <View style={styles.container}>
            <FlatList 
            data={cars}
            renderItem={({item}) => <FishItems car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default Fishes;