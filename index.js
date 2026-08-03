const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    nombre: "Daniel Aceituno",
    album_favorito: "Brasilian Skies - Masayoshi Takanaka"
  });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});