import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cars from './assets/Components/CarsList/Cars';
import Header from './assets/Components/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>

      <Header />
      <Cars />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
