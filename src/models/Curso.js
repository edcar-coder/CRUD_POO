// src/models/Curso.js
class Curso {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }

    exibirCurso() {
        return `${this.nome} - ${this.descricao}`;
    }
}

module.exports = { Curso };
