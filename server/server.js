const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Datos simulados del sensor
let sensorData = {
  temperatura: 23.5,
  humedad: 65,
  ubicacion: "Oficina - Escritorio",
  estado: "Activo"
};

// Endpoint GET para obtener datos del sensor
app.get('/api/sensor', (req, res) => {
  // Simular variación en los datos
  sensorData.temperatura = (Math.random() * 5 + 20).toFixed(1);
  sensorData.humedad = Math.floor(Math.random() * 30 + 50);
  
  console.log("Datos enviados:", sensorData);
  res.json(sensorData);
});

// Endpoint POST para actualizar datos del sensor (opcional)
app.post('/api/sensor', (req, res) => {
  const { temperatura, humedad, ubicacion, estado } = req.body;
  
  if (temperatura !== undefined) sensorData.temperatura = temperatura;
  if (humedad !== undefined) sensorData.humedad = humedad;
  if (ubicacion) sensorData.ubicacion = ubicacion;
  if (estado) sensorData.estado = estado;
  
  console.log("Datos actualizados:", sensorData);
  res.json({ mensaje: "Datos actualizados", data: sensorData });
});

// Endpoint para verificar que el servidor está corriendo
app.get('/health', (req, res) => {
  res.json({ status: 'OK', mensaje: 'Servidor funcionando' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor API corriendo en http://localhost:${PORT}`);
  console.log(`📡 Endpoint: GET http://localhost:${PORT}/api/sensor`);
});
