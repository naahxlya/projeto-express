import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// rota da API
app.get('/api', (req, res) => {
    res.json({
        date: new Date().toISOString(), // data neutra (correto)
        status: "API no Render funcionando!"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});