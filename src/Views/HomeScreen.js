import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import RutinaCard from '../Components/CardComponents';
import rutinasData from '../assets/rutinas.json';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {rutinasData.rutinas.map((rutina, index) => (
        <RutinaCard key={index} rutina={rutina} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});

export default HomeScreen;
