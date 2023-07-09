import React, {useState, useContext} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ProgresoContext} from '../Context/ProgressContext';

const RutinaCard = ({rutina}) => {
  const {
    card,
    subCard,
    title,
    text,
    image,
    buttonActive,
    buttonInactive,
    textActive,
    textInactive,
  } = styles;
  const {
    rutinasCompletadas,
    setRutinasCompletadas,
    puntosTotales,
    setPuntosTotales,
  } = useContext(ProgresoContext);
  const [isButtonActive, setButtonActive] = useState(true);
  const guardarPuntos = () => {
    setPuntosTotales(puntosTotales + rutina.puntos);
    setRutinasCompletadas([...rutinasCompletadas, rutina.nombre]);
    setButtonActive(false);
  };
  return (
    <View style={card}>
      <Text style={title}>{rutina.nombre}</Text>
      <Text style={styles.text}>Puntos: {rutina.puntos}</Text>
      {rutina.ejercicios.map((ejercicio, index) => (
        <View key={index} style={subCard}>
          <Text style={title}>{ejercicio.nombre}</Text>
          <Text style={text}>Series: {ejercicio.series}</Text>
          <Text style={text}>Repeticiones: {ejercicio.repeticiones}</Text>
          <Image
            source={{uri: ejercicio.imagen}}
            style={image}
            resizeMode="cover"
          />
          <Text style={text}>{ejercicio.descripcion}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={isButtonActive ? buttonActive : buttonInactive}
        onPress={guardarPuntos}
        disabled={!isButtonActive}>
        <Text style={isButtonActive ? textActive : textInactive}>
          {isButtonActive ? 'Rutina Terminada' : 'Puntos guardados'}
        </Text>
      </TouchableOpacity>
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
  buttonActive: {
    backgroundColor: '#00D3A0',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonInactive: {
    backgroundColor: '#858585',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  textActive: {
    color: '#fff',
  },
  textInactive: {
    color: '#fff',
  },
});

export default RutinaCard;
