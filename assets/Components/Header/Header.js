import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './HeaderStyle';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: '36px', fontWeight: 'bold', color: '#e74c3c'}}>Fish Bazar</Text>
            <Image style={styles.menu} source={require('../../images/menu.png')} />
        </View>
    );
};

export default Header;