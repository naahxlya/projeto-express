import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        date: new Date().toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo'
        }),
        status: "API no Render funcionando!"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});