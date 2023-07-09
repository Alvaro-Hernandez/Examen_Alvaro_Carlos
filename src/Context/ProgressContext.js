import React, {createContext, useState} from 'react';

export const ProgresoContext = createContext();

export const ProgresoProvider = ({children}) => {
  const [rutinasCompletadas, setRutinasCompletadas] = useState([]);
  const [puntosTotales, setPuntosTotales] = useState(0);

  return (
    <ProgresoContext.Provider
      value={{
        rutinasCompletadas,
        setRutinasCompletadas,
        puntosTotales,
        setPuntosTotales,
      }}>
      {children}
    </ProgresoContext.Provider>
  );
};
