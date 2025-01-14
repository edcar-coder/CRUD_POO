// Importações
const { pool } = require("../config/database");
const { Aluno } = require("../models/Aluno");
const { Curso } = require("../models/Curso"); // <== Adicione esta linha

class AlunoController {
    adicionarAluno(id, nome, email, telefone, matricula, curso) {
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

    async listarAluno() {
        try {
            const consulta = `select aluno.nome, aluno.email, aluno.telefone, aluno.matricula, aluno.curso from aluno`
            const dados = await pool.query(consulta);
            console.table(dados.rows);
        } catch (error) {
           
        }
    }
}

module.exports = { AlunoController };
