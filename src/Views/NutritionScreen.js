import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import nutricion from '../assets/nutricion.json';

const NutritionScreen = ({navigation}) => {
  const [consejosAleatorios, setConsejosAleatorios] = useState([]);
  const [consejoSeleccionado, setConsejoSeleccionado] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      obtenerConsejosAleatorios();
    }, []),
  );

  const obtenerConsejosAleatorios = () => {
    const consejosDesordenados = [...nutricion.nutritionTips];
    const consejosAleatorios = [];

    while (consejosAleatorios.length < 4 && consejosDesordenados.length > 0) {
      const indiceAleatorio = Math.floor(
        Math.random() * consejosDesordenados.length,
      );
      const consejoAleatorio = consejosDesordenados.splice(
        indiceAleatorio,
        1,
      )[0];
      consejosAleatorios.push(consejoAleatorio);
    }

    setConsejosAleatorios(consejosAleatorios);
    setConsejoSeleccionado(null);
  };

  const seleccionarConsejo = consejo => {
    setConsejoSeleccionado(consejo);
  };

  const volverAConsejos = () => {
    setConsejoSeleccionado(null);
  };

  const renderizarTarjetaConsejo = ({item}) => (
    <TouchableOpacity onPress={() => seleccionarConsejo(item)}>
      <View style={styles.tarjeta}>
        {item.image && (
          <Image source={{uri: item.image}} style={styles.imagenConsejo} />
        )}
        <Text style={styles.titulo}>{item.title}</Text>
        <Text style={styles.contenido}>{item.content}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.contenedor}>
      <Text style={styles.tituloPantalla}>Consejos de Nutrición</Text>
      {!consejoSeleccionado ? (
        <FlatList
          data={consejosAleatorios}
          renderItem={renderizarTarjetaConsejo}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.contenedorLista}
        />
      ) : (
        <View style={styles.consejoSeleccionadoContainer}>
          {consejoSeleccionado.image && (
            <Image
              source={{uri: consejoSeleccionado.image}}
              style={styles.imagenConsejoSeleccionado}
            />
          )}
          <Text style={styles.consejoSeleccionadoTitulo}>
            {consejoSeleccionado.title}
          </Text>
          <Text style={styles.consejoSeleccionadoContenido}>
            {consejoSeleccionado.content}
          </Text>
          <TouchableOpacity
            onPress={volverAConsejos}
            style={styles.botonVolver}>
            <Text style={styles.botonVolverTexto}>Volver a los consejos</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  tituloPantalla: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  contenedorLista: {
    paddingBottom: 20,
  },
  tarjeta: {
    backgroundColor: '#313131',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  imagenConsejo: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFFFFF',
  },
  contenido: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  consejoSeleccionadoContainer: {
    backgroundColor: '#313131',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  imagenConsejoSeleccionado: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  consejoSeleccionadoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFFFFF',
  },
  consejoSeleccionadoContenido: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  botonVolver: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  botonVolverTexto: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NutritionScreen;
