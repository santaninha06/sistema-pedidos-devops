# Sistema de Pedidos DevOps

Projeto acadêmico desenvolvido para a disciplina de DevOps com o objetivo de integrar frontend, backend, banco de dados, testes automatizados, containerização e integração contínua.

## Tecnologias Utilizadas

* React + Vite
* Node.js
* Express
* PostgreSQL
* Docker
* Docker Compose
* GitHub Actions
* Jest
* Supertest

## Estrutura do Projeto

```text
sistema-pedidos-devops/
├── frontend/
├── backend/
│   ├── src/
│   └── tests/
├── database/
│   └── init.sql
├── .github/
│   └── workflows/
│       └── ci.yml
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md
```

## Funcionalidades

* Consulta de pedidos via API REST
* Integração entre React e Express
* Persistência de dados em PostgreSQL
* Testes automatizados do backend
* Containerização com Docker
* Orquestração com Docker Compose
* Integração Contínua com GitHub Actions

## Como Executar o Backend

```bash
cd backend
npm install
npm start
```

A API ficará disponível em:

```text
http://localhost:3001
```

Health Check:

```text
http://localhost:3001/health
```

## Como Executar o Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicação disponível em:

```text
http://localhost:5173
```

## Como Executar os Testes

```bash
cd backend
npm test
```

## Como Executar com Docker Compose

Construir e iniciar todos os serviços:

```bash
docker compose up --build
```

Verificar os containers em execução:

```bash
docker ps
```

Encerrar os containers:

```bash
docker compose down
```

## Banco de Dados

O banco PostgreSQL é inicializado automaticamente através do arquivo:

```text
database/init.sql
```

Estrutura inicial:

```sql
CREATE TABLE IF NOT EXISTS pedidos(
  id SERIAL PRIMARY KEY,
  descricao TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'Pendente'
);
```

Registro inicial:

```sql
INSERT INTO pedidos(descricao)
VALUES('Pedido Inicial');
```

## Pipeline de Integração Contínua

O projeto utiliza GitHub Actions para automatizar:

* Checkout do código
* Configuração do ambiente Node.js
* Instalação das dependências
* Execução dos testes automatizados
* Validação da aplicação

A pipeline é executada automaticamente a cada push ou pull request configurado no workflow.

## Correções e Melhorias Implementadas

* Criação da estrutura inicial do projeto
* Implementação do backend com Express
* Integração com PostgreSQL
* Desenvolvimento do frontend em React
* Criação de testes automatizados
* Containerização com Docker
* Configuração do Docker Compose
* Configuração de variáveis de ambiente
* Configuração do GitHub Actions
* Documentação do projeto

## Projeto Acadêmico

Trabalho desenvolvido para fins educacionais na disciplina de DevOps, aplicando conceitos de integração contínua, testes automatizados, banco de dados e conteinerização.
