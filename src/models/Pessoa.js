// src/models/Pessoa.js
class Pessoa {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    exibirInfo() {
        return `Nome: ${this.nome}, Email: ${this.email}, Telefone: ${this.telefone}`;
    }
}

module.exports = { Pessoa };
