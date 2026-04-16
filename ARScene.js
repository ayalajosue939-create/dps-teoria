import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ARScene({ data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Temperatura</Text>
      <Text style={styles.value}>{data.temperatura}°C</Text>
      <Text style={styles.label}>Humedad</Text>
      <Text style={styles.value}>{data.humedad}%</Text>
      <Text style={styles.label}>Ubicación</Text>
      <Text style={styles.value}>{data.ubicacion || 'Desconocida'}</Text>
      <Text style={styles.label}>Estado</Text>
      <Text style={styles.value}>{data.estado || 'N/A'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#1f1f1f',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4
  },
  label: {
    color: '#bbbbbb',
    fontSize: 14,
    marginTop: 12
  },
  value: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600'
  }
});