# ARSensorApp - Guía de ejecución

## Estructura del proyecto

```
ARSensorApp/
├── App.js                 (App principal de Expo)
├── ARScene.js            (Componente que muestra los datos)
├── package.json          (Dependencias de la app)
├── app.json              (Config de Expo)
└── server/
    ├── server.js         (API REST con Express)
    └── package.json      (Dependencias del servidor)
```

## Cómo ejecutar el proyecto

### 1️⃣ Inicia el SERVIDOR API (en una terminal)

```bash
cd server
npm start
```

Verás:
```
🚀 Servidor API corriendo en http://localhost:3000
📡 Endpoint: GET http://localhost:3000/api/sensor
```

### 2️⃣ Inicia la APP EXPO (en otra terminal)

```bash
npm start
```

O:
```bash
npx expo start --clear
```

### 3️⃣ Escanea el QR en Expo Go

- Abre **Expo Go** en tu teléfono
- Escanea el código QR

### ⚠️ IMPORTANTE

Si la app y el servidor están en computadoras diferentes:

**En App.js, cambia:**
```javascript
const res = await axios.get("http://192.168.1.19:3000/api/sensor");
```

**Por la IP de tu PC:**
```javascript
const res = await axios.get("http://TU_IP:3000/api/sensor");
```

Para obtener tu IP, en la terminal ejecuta:
```bash
ipconfig
```

Y busca el valor de "IPv4 Address".

## Endpoints disponibles

### GET /api/sensor
Obtiene los datos actuales del sensor
```bash
curl http://localhost:3000/api/sensor
```

Respuesta:
```json
{
  "temperatura": 23.5,
  "humedad": 65,
  "ubicacion": "Oficina - Escritorio",
  "estado": "Activo"
}
```

### POST /api/sensor
Actualiza los datos del sensor
```bash
curl -X POST http://localhost:3000/api/sensor \
  -H "Content-Type: application/json" \
  -d '{"temperatura": 25, "humedad": 70}'
```

### GET /health
Verifica que el servidor esté funcionando
```bash
curl http://localhost:3000/health
```

## Parar el servidor

- Presiona `Ctrl+C` en la terminal del servidor

## Parar la app

- Presiona `Ctrl+C` en la terminal de Expo

## Notas

- El servidor simula datos aleatorios cada vez que se consulta el endpoint
- La app actualiza automáticamente cada 5 segundos
- Asegúrate de que tanto el servidor como la app estén en la misma red para que funcione
