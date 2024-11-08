// index.js
const { AlunoController } = require("./src/controllers/ControllerAluno");
const { Curso } = require("./src/models/Curso");

// Instância do curso
const excelDaNasa = new Curso("Excel da NASA", "Curso preparatório para dev da NASA");

// Instância do controlador de alunos
const alunoController = new AlunoController();

// Listar alunos (inicialmente vazio)
alunoController.listarAluno();

// Adicionar um aluno e listar novamente
alunoController.adicionarAluno("João", "joao@email.com", "84999999999", "a1234", excelDaNasa);
alunoController.listarAluno();
