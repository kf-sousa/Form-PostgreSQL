const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Rota para cadastrar o usuário no banco
app.post('/cadastrar', async (req, res) => {
    const { firstname, lastname, email, number, password, gender } = req.body;

    try {
        const queryText = `
            INSERT INTO usuarios (primeiro_nome, sobrenome, email, celular, senha, genero)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, email;
        `;
        const values = [firstname, lastname, email, number, password, gender];

        const result = await pool.query(queryText, values);
        
        res.status(201).json({
            message: 'Usuário cadastrado com sucesso!',
            user: result.rows[0]
        });
    } catch (error) {
        console.error('Erro no servidor:', error);
        if (error.code === '23505') { // Código do Postgres para e-mail duplicado
            return res.status(400).json({ error: 'E-mail já cadastrado.' });
        }
        res.status(500).json({ error: 'Erro interno ao salvar no banco de dados.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));