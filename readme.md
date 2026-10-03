# Formulário de Cadastro Fullstack

Aplicação web completa de cadastro de usuários com frontend responsivo e backend conectado ao banco de dados PostgreSQL.

## 🚀 Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript (Fetch API)
* **Backend:** Node.js, Express, CORS, Dotenv
* **Banco de Dados:** PostgreSQL
* **Ferramentas:** Nodemon

---

## 🛠️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina (Ubuntu / Linux):

* [Node.js](https://nodejs.org/) (v18 ou superior)
* [npm](https://www.npmjs.com/)
* [PostgreSQL](https://www.postgresql.org/)

---

## 📦 Configuração do Banco de Dados

1. Acesse o terminal do PostgreSQL ou rode o comando no terminal do sistema para criar o banco de dados:

```bash
sudo -u postgres psql -c "CREATE DATABASE meu_cadastro;"
```

2. Execute o comando abaixo para criar a tabela `usuarios`:

```bash
sudo -u postgres psql -d meu_cadastro -c "
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    primeiro_nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    celular VARCHAR(20) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    genero VARCHAR(20) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
"
```

---

## 🔧 Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   cd SEU_REPOSITORIO
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto e defina suas credenciais:

   ```env
   DB_USER=postgres
   DB_PASSWORD=sua_senha_aqui
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=meu_cadastro
   PORT=3000
   ```

---

## ▶️ Como Executar o Projeto

1. **Inicie o servidor Backend:**
   ```bash
   npx nodemon server.js
   ```
   *O servidor estará rodando em:* `http://localhost:3000`

2. **Abra o Frontend:**
   Abra o arquivo `index.html` diretamente no seu navegador ou utilizando a extensão **Live Server** no VS Code.

3. **Teste o Cadastro:**
   Preencha os dados no formulário e clique em **Continuar**. Se tudo estiver correto, você receberá um alerta de sucesso e os dados serão salvos no PostgreSQL!

---

## 🔍 Verificar os Dados no Banco

Para conferir os usuários cadastrados via terminal:

```bash
sudo -u postgres psql -d meu_cadastro -c "SELECT * FROM usuarios;"
```