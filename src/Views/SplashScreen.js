import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import animationSplash from '../assets/animationSplash.json'; // Ruta al archivo JSON de animación de Lottie

const SplashScreen = ({navigation}) => {
  const {container} = styles;
  return (
    <View style={container}>
      <LottieView
        source={animationSplash}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030',
  },
});

export default SplashScreen;
