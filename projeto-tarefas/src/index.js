// src/index.js
// API To-do simples usando Node.js + Express

// importa o express
const express = require('express');

// cria a aplicação express
const app = express();

// porta onde o servidor vai rodar (padrão 3000)
const PORT = process.env.PORT || 3000;


app.use(express.json());


//    ao reiniciar o servidor, os dados são perdidos — é proposital (sem DB)
let tarefas = [];
let idAtual = 1; // gera IDs : 1,2,3,...

// -------------------- ROTAS --------------------

// GET /tarefas
// Retorna todas as tarefas (array JSON).
app.get('/tarefas', (req, res) => {
  res.json(tarefas); // status 200 
});

// POST /tarefas
// Cria uma nova tarefa
app.post('/tarefas', (req, res) => {
  const { titulo } = req.body; // pega o campo titulo

  // Validação simples
  if (!titulo) {
    return res.status(400).json({ erro: "O campo 'titulo' é obrigatório." });
  }

  const novaTarefa = {
    id: idAtual++,      // pega o id atual e incrementa
    titulo,             // título enviado
    concluida: false,   // não concluída
  };

  tarefas.push(novaTarefa);      // adiciona no array
  res.status(201).json(novaTarefa); // responde com 201 Created
});

// PUT /tarefas/:id
// Atualiza uma tarefa existente pelo id
app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id, 10); // transforma string em número
  const { titulo, concluida } = req.body;

  // procura a tarefa
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada.' });
  }

  // atualiza somente se o campo foi enviado - não altera
  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa); // retorna a tarefa atualizada
});

// DELETE /tarefas/:id
// Remove a tarefa com o id informado.
app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = tarefas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Tarefa não encontrada.' });
  }

  tarefas.splice(index, 1); // remove 1 item na posição index
  res.json({ mensagem: 'Tarefa removida com sucesso.' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
