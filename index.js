// index.js
const { AlunoController } = require("./src/controllers/ControllerAluno");
const { Curso } = require("./src/models/Curso");

const alunos = new AlunoController();

//lunos.adicionarAluno('Fulano', 'fulano@email.com', '84999999', '18', 'tec em enfermagem')
alunos.listarAluno();


alunos.editarAluno('a932147', "Editado com coalesce", null, null, null)

alunos.excluirAluno('a93214')

