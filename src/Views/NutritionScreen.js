import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native'; // Importamos el hook useFocusEffect para manejar el enfoque de la pantalla
import nutricion from '../assets/nutricion.json'; // Importamos el archivo JSON de los consejos de nutrición

const NutritionScreen = ({navigation}) => {
  const [consejosAleatorios, setConsejosAleatorios] = useState([]); // Estado para almacenar los consejos de nutrición aleatorios
  const [consejoSeleccionado, setConsejoSeleccionado] = useState(null); // Estado para almacenar el consejo de nutrición seleccionado
  // Desestructuramos los estilos del objeto styles
  const {
    contenedor,
    tituloPantalla,
    contenedorLista,
    tarjeta,
    imagenConsejo,
    titulo,
    contenido,
    consejoSeleccionadoContainer,
    imagenConsejoSeleccionado,
    consejoSeleccionadoTitulo,
    consejoSeleccionadoContenido,
    botonVolver,
    botonVolverTexto,
  } = styles;
  // Hook useEffect para obtener los consejos de nutrición aleatorios al cargar la pantalla
  useFocusEffect(
    React.useCallback(() => {
      obtenerConsejosAleatorios();
    }, []),
  );
  // Función para obtener los consejos de nutrición aleatorios
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
  // Función para seleccionar un consejo de nutrición
  const seleccionarConsejo = consejo => {
    setConsejoSeleccionado(consejo);
  };
  // Función para volver a la lista de consejos de nutrición
  const volverAConsejos = () => {
    setConsejoSeleccionado(null);
  };
  // Función para renderizar cada tarjeta de consejo de nutrición
  const renderizarTarjetaConsejo = ({item}) => (
    <TouchableOpacity onPress={() => seleccionarConsejo(item)}>
      <View style={tarjeta}>
        {item.image && (
          <Image source={{uri: item.image}} style={imagenConsejo} />
        )}
        <Text style={titulo}>{item.title}</Text>
        <Text style={contenido}>{item.content}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={contenedor}>
      <Text style={tituloPantalla}>Consejos de Nutrición</Text>
      {!consejoSeleccionado ? (
        <FlatList
          data={consejosAleatorios}
          renderItem={renderizarTarjetaConsejo}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={contenedorLista}
        />
      ) : (
        <View style={consejoSeleccionadoContainer}>
          {consejoSeleccionado.image && (
            <Image
              source={{uri: consejoSeleccionado.image}}
              style={imagenConsejoSeleccionado}
            />
          )}
          <Text style={consejoSeleccionadoTitulo}>
            {consejoSeleccionado.title}
          </Text>
          <Text style={consejoSeleccionadoContenido}>
            {consejoSeleccionado.content}
          </Text>
          <TouchableOpacity onPress={volverAConsejos} style={botonVolver}>
            <Text style={botonVolverTexto}>Volver a los consejos</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
// Estilos
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
