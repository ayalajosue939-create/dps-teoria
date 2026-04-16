import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import axios from "axios";
import { ViroARSceneNavigator } from "@viro-community/react-viro";
import ARScene from "./ARScene";

export default function App() {

  const [data, setData] = useState({
    temperatura: 0,
    humedad: 0,
    ubicacion: "",
    estado: ""
  });

  const obtenerDatos = async () => {
    try {
      const res = await axios.get("https://mocki.io/v1/sensor");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    obtenerDatos();

    const interval = setInterval(() => {
      obtenerDatos();
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Actualizar datos" onPress={obtenerDatos} />

      <ViroARSceneNavigator
        initialScene={{
          scene: () => <ARScene data={data} />
        }}
      />

    </View>
  );
}