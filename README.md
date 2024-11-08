# CRUD-POO

Este projeto implementa um sistema CRUD (Create, Read, Update, Delete) para gerenciar alunos, utilizando conceitos de Programação Orientada a Objetos (POO). Abaixo, detalhamos o conteúdo de cada arquivo do projeto.

## Estrutura do Projeto

1. **database.js**
    - Este arquivo contém o banco de dados em memória, representado como um array vazio onde os alunos serão armazenados.

    ```javascript
    // src/config/database.js
    const alunos = [];

    module.exports = { alunos };
    ```

2. **ControllerAluno.js**
    - O controlador `AlunoController` é responsável pelas operações de criação, edição, exclusão e listagem dos alunos. No método `listarAluno`, usamos `map` para criar um array de objetos simples com os dados acessados pelos getters, permitindo ao `console.table()` exibir os atributos privados.

    ```javascript
    // src/controllers/ControllerAluno.js
    const { alunos } = require("../config/database");
    const { Aluno } = require("../models/Aluno");

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

        editarAluno(matricula, novoNome, novoEmail, novoTelefone, novoCurso) {
            try {
                const aluno = alunos.find(aluno => aluno.getMatricula === matricula);
                if (aluno) {
                    aluno.nome = novoNome || aluno.nome;
                    aluno.email = novoEmail || aluno.email;
                    aluno.telefone = novoTelefone || aluno.telefone;
                    aluno.setCurso = novoCurso || aluno.getCurso;
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
                    curso: aluno.getCurso.exibirCurso()
                }));
                console.table(dadosAlunos);
            } catch (error) {
                console.error("Erro ao listar alunos:", error.message);
            }
        }
    }

    module.exports = { AlunoController };
    ```

3. **Aluno.js**
    - A classe `Aluno` é responsável pela representação de um aluno. Nela, os atributos `matricula` e `curso` são privados, e há métodos getters e setters para acessá-los de forma controlada.

    ```javascript
    // src/models/Aluno.js
    const { Pessoa } = require("./Pessoa");

    class Aluno extends Pessoa {
        #matricula;
        #curso;

        constructor(nome, email, telefone, matricula, curso) {
            super(nome, email, telefone);
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
    ```

4. **Curso.js**
    - A classe `Curso` define os cursos disponíveis e inclui o método `exibirCurso()` para retornar uma descrição completa do curso.

    ```javascript
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
    ```

5. **Pessoa.js**
    - A classe `Pessoa` serve como classe base para `Aluno` e contém informações básicas como nome, email e telefone.

    ```javascript
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
    ```

6. **index.js**
    - Este é o arquivo principal, onde você cria instâncias de `Curso` e usa o `AlunoController` para gerenciar alunos.

    ```javascript
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
    ```

## Explicação Final

- **listarAluno() no ControllerAluno**: Gera uma visualização com todos os detalhes dos alunos, convertendo os dados privados em um formato público para exibição.
- **Encapsulamento Mantido**: Mesmo com `matricula` e `curso` privados, conseguimos exibi-los sem comprometer a estrutura da classe.

Esses ajustes garantem que os dados dos alunos sejam exibidos corretamente no console, mantendo a organização e encapsulamento da estrutura original do projeto.