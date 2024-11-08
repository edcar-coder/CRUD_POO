// Importações
const { alunos } = require("../config/database");
const { Aluno } = require("../models/Aluno");
const { Curso } = require("../models/Curso"); // <== Adicione esta linha

class AlunoController {
    adicionarAluno(nome, email, telefone, matricula, curso) {
        try {
            const novoAluno = new Aluno(nome, email, telefone, matricula, curso);
            alunos.push(novoAluno);
            return novoAluno;
        } catch (error) {
            console.error("Erro ao criar aluno:", error.message);
        }
    }

    editarAluno(matricula, novoNome, novoEmail, novoTelefone) {
        try {
            const aluno = alunos.find(aluno => aluno.getMatricula === matricula);
            if (aluno) {
                aluno.nome = novoNome || aluno.nome;
                aluno.email = novoEmail || aluno.email;
                aluno.telefone = novoTelefone || aluno.telefone;
            } else {
                console.log("Aluno não encontrado!");
            }
        } catch (error) {
            console.error("Erro ao editar aluno:", error.message);
        }
    }

    excluirAluno(matricula) {
        try {
            const index = alunos.findIndex(aluno => aluno.getMatricula === matricula);
            if (index !== -1) {
                const alunoRemovido = alunos.splice(index, 1);
                return alunoRemovido;
            } else {
                console.log("Aluno não encontrado!");
            }
        } catch (error) {
            console.error("Erro ao excluir aluno:", error.message);
        }
    }

    listarAluno() {
        try {
            const dadosAlunos = alunos.map(aluno => ({
                nome: aluno.nome,
                email: aluno.email,
                telefone: aluno.telefone,
                matricula: aluno.getMatricula,
                curso: `${aluno.getCurso.nome} - ${aluno.getCurso.descricao}`
            }));
            console.table(dadosAlunos);
        } catch (error) {
            console.error("Erro ao listar alunos:", error.message);
        }
    }
}

module.exports = { AlunoController };
