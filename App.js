import React from 'react';
import { Home } from './src/screens/Home';
import {
  useFonts, 
  Raleway_700Bold,
  Raleway_500Medium, 
  Raleway_600SemiBold 
  } from '@expo-google-fonts/raleway';

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Raleway_500Medium,
    Raleway_600SemiBold,
  })



  return (
      <Home/>
  );
}
