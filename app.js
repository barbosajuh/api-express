import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Bem-vindo ao express!');
});

app.listen(PORT, () => {
    console.log('Servidor rodando em http://loca1host: ${PORT}'
        
    )
})