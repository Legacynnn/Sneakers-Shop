import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { Routes } from "./src/routes/routes";
import {} from 'expo'
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton'
import { Loading } from "./src/components/Loading";
import { THEME } from "./src/theme/theme";

export default function App() {

  const [fontsLoaded] = useFonts({Anton_400Regular});
  return (
    <NativeBaseProvider theme={THEME} >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes/> : <Loading/>}
    </NativeBaseProvider>
  );
}