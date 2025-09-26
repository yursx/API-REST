## API To-do List - (Node.js + Express)


###  Descrição
API REST simples para gerenciar tarefas (CRUD)
Sem banco de dados —> armazenamento em memória

### Pré-requisitos
- Node.js instalado (v14+) -> Necessario ter/instalar o node.js
- Postman para testes

### Instale as dependências
```
npm install express
```

### Para iniciar o servidor
```
cd projeto-tarefas
npm start
# ou
node src/index.js
```

### Rotas

GET /tarefas -> lista todas as tarefas

POST /tarefas -> cria a tarefa

PUT /tarefas/:id -> atualiza tarefa

DELETE /tarefas/:id -> remove tarefa

<br>
Servidor: http://localhost:3000

### Testando no Postman

Abra o Postman

Crie requisições para as rotas abaixo

Para POST/PUT: Body → raw → JSON

Envie e confira status e resposta
<br>
### Exemplos (JSON)

POST servidor/tarefas:
Para inserir uma tarefa, basta colocar o titulo como abaixo e clicar em SEND
```
{ "titulo": "Estudar Frontend" }
```

PUT servidor/tarefas/1:
Obs: Você coloca /1 pois o id da primeira tarefa é 1 e assim atualiza o id
```
{ "titulo": "Terminar projeto", "concluida": true }
```

DELETE servidor/tarefas/id:
```
Para apagar as tarefas, basta colocar /id da tarefa e clicar em SEND
```

GET servidor/tarefas:
```
é para visualizar as tarefas, basta apenas colocar o link do servidor e se tiver alguma tarefa irá aparecer
```
<br>

### Prints 

As imagens dos testes estão na pasta /prints:

prints/get.png

prints/post.png

prints/put.png

prints/delete.png





