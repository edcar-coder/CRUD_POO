// src/models/Aluno.js
const { Pessoa } = require("./Pessoa");

class Aluno extends Pessoa {
    #matricula;
    #curso;

    constructor(id, nome, email, telefone, matricula, curso) {
        super(nome, email, telefone);
        this.id = id;
        this.#matricula = matricula;
        this.#curso = curso;
    }

    get getMatricula() {
        return this.#matricula;
    }

    set setMatricula(novaMatricula) {
        if (novaMatricula && novaMatricula.length === 5) {
            this.#matricula = novaMatricula;
        } else {
            console.log("Matrícula não informada ou tamanho inválido.");
        }
    }

    get getCurso() {
        return this.#curso;
    }

    set setCurso(novoCurso) {
        if (novoCurso && novoCurso instanceof Curso) {
            this.#curso = novoCurso;
        } else {
            console.log("Curso inválido ou não existe.");
        }
    }
}

module.exports = { Aluno };
