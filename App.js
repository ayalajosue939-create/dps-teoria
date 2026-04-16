import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet, ScrollView, Text } from "react-native";
import axios from "axios";
import ARScene from "./ARScene";

export default function App() {

  const [data, setData] = useState({
    temperatura: 0,
    humedad: 0,
    ubicacion: "",
    estado: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const obtenerDatos = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Obteniendo datos de la API...");
      // Cambia localhost por la IP de tu PC si accedes desde otro dispositivo
      const res = await axios.get("http://192.168.1.19:3000/api/sensor", {
        timeout: 5000
      });
      console.log("Respuesta API:", res.data);
      setData(res.data);
    } catch (error) {
      console.log("Error:", error.message);
      setError("Error al obtener datos del servidor");
    } finally {
      setLoading(false);
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
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Sensor AR compatible con Expo</Text>
      <Button title={loading ? "Cargando..." : "Actualizar datos"} onPress={obtenerDatos} />
      {error && <Text style={styles.error}>⚠️ {error}</Text>}
      <ARScene data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  content: {
    padding: 20,
    alignItems: 'stretch'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center'
  },
  error: {
    color: '#ff6b6b',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#2a1a1a',
    borderRadius: 8,
    textAlign: 'center'
  }
});