import express from 'express'
import res from 'express/lib/response';

const app = express()
const PORT = 3000

const usuarios = [
    {id: 1, nome: 'Gabriel'},
    {id: 2, nome: 'João'},
      {id: 3, nome: 'Paulo'}
]

app.get('/', (req, res) => {
    res.send('Bem-vindo ao express!')
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
})

app.post('/usuario', () => {
    const nomeUsuario = {
        id: usuarios.length +1,
        nome: 'Lucas'
    }
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
})
app.get('/usuarios', (req, res) =>{
    const id = req.params.id;
    const usuario = usuarios.find(u => u.id === parseInt(id));
    if (!usuario){
        return res.status(404).json({error: "Usuario não encontrado!"});
    }
    res.json(usuario);
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT} `)
});