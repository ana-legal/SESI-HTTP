const express = require ('express');

const app = express();

app.use(express.json());

const PORT = 3000;

let alunos =  [
    {
        id: 1,
        nome: "Ana",
        email: "ana@email.com",
        turma: "TDS2026"
    },
    {
        id: 2,
        nome: "Pedro",
        email: "pedro@email.com",
        turma: "TDS2026" 
    }
];

// GET - Listar todos os alunos
app.get("/alunos", (req, res) => {
    res.status(200).json(alunos);

});

// GET - Consultar aluno pelo id
app.get("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);

const aluno = alunos.find(a => a.id == id);

if (!aluno){
    return res.status(404).json({
        mensagem: "Aluno não encontrado."

    });
}
})

// POST - Cadastrar aluno
app.post("/aluno", (req, res) => {
    const { nome, email, turma } = req.body;

    if(!nome || !email || !turma) {
        return res.status(400).json({
            mensagem: "Informe nome, email e turma"
        });
    }

    const novoAluno = {
        // Operador ternário
        id: alunos.length ? Math.max(...alunos.map(a => a.id)) + 1 : 1,
        nome,
        email,
        turma
    };

    alunos.push(novoAluno);
    res.status(200).json(novoAluno);
})

// PUT - Atualizar aluno
app.put("/aluno/:id", (req, res) => {

});