import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/Views/SplashScreen';
import AppNavigator from './src/Navigation/AppNavigation';
import {ProgresoProvider} from './src/Context/ProgressContext';

const App = () => {
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashFinished(true);
    }, 2000);
  }, []);

  if (!isSplashFinished) {
    return <SplashScreen />;
  }

  return (
    <ProgresoProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ProgresoProvider>
  );
};

export default App;
