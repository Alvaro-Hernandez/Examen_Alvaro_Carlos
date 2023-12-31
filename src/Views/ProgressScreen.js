import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ProgresoContext} from '../Context/ProgressContext';

const ProgressScreen = () => {
  const {container, title, text, itemContainer, itemText} = styles;
  const {rutinasCompletadas, puntosTotales} = useContext(ProgresoContext);

  const renderItem = ({item}) => (
    <View style={itemContainer}>
      <Text style={itemText}>{item}</Text>
    </View>
  );

  return (
    <View style={container}>
      <Text style={title}>✅Aqui tienes tu progreso: </Text>
      {puntosTotales > 0 ? (
        <Text style={text}>👀Total de Puntos: {puntosTotales}</Text>
      ) : (
        <Text style={text}>Aún no has ganado ningún punto 😑</Text>
      )}
      <Text style={text}>💪🏼Rutinas Completadas:</Text>
      {rutinasCompletadas.length > 0 ? (
        <FlatList
          data={rutinasCompletadas}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={text}>Aún no has completado ninguna rutina 😑</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: '#444',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ProgressScreen;
