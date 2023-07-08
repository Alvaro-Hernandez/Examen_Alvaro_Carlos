import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const RutinaCard = ({rutina}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{rutina.nombre}</Text>
      <Text style={styles.text}>Puntos: {rutina.puntos}</Text>
      {rutina.ejercicios.map((ejercicio, index) => (
        <View key={index} style={styles.subCard}>
          <Text style={styles.title}>{ejercicio.nombre}</Text>
          <Text style={styles.text}>Series: {ejercicio.series}</Text>
          <Text style={styles.text}>
            Repeticiones: {ejercicio.repeticiones}
          </Text>
          <Image
            source={{uri: ejercicio.imagen}}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.text}>{ejercicio.descripcion}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#333',
  },
  subCard: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#222',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
});

export default RutinaCard;
