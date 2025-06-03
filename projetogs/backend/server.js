const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json()); 

app.post('/cadastrar', (req, res) => {
  const dados = req.body;
  console.log('Dados recebidos:', dados);

  

  res.json({ message: 'Cadastro recebido com sucesso!', dadosRecebidos: dados });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
