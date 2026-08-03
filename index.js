const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    nombre: "Daniel Aceituno",
    cancion_favorita: "Beleza Pula"
  });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});