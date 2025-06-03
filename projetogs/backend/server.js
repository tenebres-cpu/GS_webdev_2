const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Permitir conexões do frontend (React) que normalmente roda em localhost:3000
app.use(cors());
app.use(express.json()); // para ler JSON do corpo das requisições

app.post('/cadastrar', (req, res) => {
  const dados = req.body;
  console.log('Dados recebidos:', dados);

  // Aqui você pode salvar no banco, mandar e-mail, etc

  res.json({ message: 'Cadastro recebido com sucesso!', dadosRecebidos: dados });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
