const Pessoa = require("./pessoas/Pessoa");
const Aluno = require("./pessoas/Aluno");
const Professor = require("./pessoas/Professor");
const util = require("./biblioteca/util");

function mostrarDados(objeto) {
    console.log("----------------------------------------");

    console.log("Nome:", objeto.getNome());
    console.log("E-mail:", objeto.getEmail());

    if (objeto instanceof Aluno) {
        console.log("Tipo: Aluno");
        console.log("Matrícula:", objeto.getMatricula());
    } else if (objeto instanceof Professor) {
        console.log("Tipo: Professor");
        console.log("Disciplina:", objeto.getDisciplina());
    } else if (objeto instanceof Pessoa) {
        console.log("Tipo: Pessoa");
    }

    console.log("----------------------------------------");
}

console.log("\n===== CADASTRO DE PESSOAS =====");

const pessoa1 = new Pessoa(
    "Ana Silva",
    "ana@gmail.com"
);

const pessoa2 = new Pessoa(
    "Carlos Souza",
    "email-invalido"
);

console.log("Pessoa 1 criada:");
mostrarDados(pessoa1);

console.log("Pessoa 2 criada com e-mail inválido:");
mostrarDados(pessoa2);

// Testando alteração de e-mail
console.log("Alterando e-mail da Pessoa 2...");

console.log(
    "Resultado:",
    pessoa2.setEmail("carlos@gmail.com")
);

mostrarDados(pessoa2);

console.log("\n===== CADASTRO DE ALUNOS =====");

const aluno1 = new Aluno(
    "Maria Oliveira",
    "maria@gmail.com",
    "20250001"
);

const aluno2 = new Aluno(
    "João Santos",
    "joao@email",
    "123"
);

console.log("Aluno 1:");
mostrarDados(aluno1);

console.log("Aluno 2:");
mostrarDados(aluno2);

// Testando matrícula
console.log("Alterando matrícula do Aluno 2...");

console.log(
    "Resultado:",
    aluno2.setMatricula("20250002")
);

mostrarDados(aluno2);


console.log("\n===== CADASTRO DE PROFESSORES =====");

const professor1 = new Professor(
    "José Pereira",
    "jose@universidade.edu.br",
    "Programação Orientada a Objetos"
);

const professor2 = new Professor(
    "Mariana Costa",
    "mariana@gmail.com",
    "Banco de Dados"
);

console.log("Professor 1:");
mostrarDados(professor1);

console.log("Professor 2:");
mostrarDados(professor2);

// Testando a sobrescrita de setEmail()
console.log("Alterando e-mail do Professor 2...");

console.log(
    "Tentativa com e-mail comum:",
    professor2.setEmail("mariana@gmail.com")
);

console.log(
    "Tentativa com e-mail institucional:",
    professor2.setEmail("mariana@universidade.edu.br")
);

mostrarDados(professor2);


console.log("\n===== TESTES DA BIBLIOTECA =====");

console.log(
    "E-mail válido:",
    util.validarEmail("teste@gmail.com")
);

console.log(
    "E-mail inválido:",
    util.validarEmail("teste@email")
);

console.log(
    "E-mail institucional válido:",
    util.validarEmail("professor@universidade.edu.br")
);

console.log(
    "Matrícula válida:",
    util.validarMatricula("20250001")
);

console.log(
    "Matrícula inválida:",
    util.validarMatricula("123")
);

console.log(
    "CPF válido:",
    util.validarCPF("529.982.247-25")
);

console.log(
    "CPF inválido:",
    util.validarCPF("111.111.111-11")
);


console.log("\n========================================");
console.log("           RELATÓRIO FINAL");
console.log("========================================");

console.log("\nPESSOAS:");
mostrarDados(pessoa1);
mostrarDados(pessoa2);

console.log("\nALUNOS:");
mostrarDados(aluno1);
mostrarDados(aluno2);

console.log("\nPROFESSORES:");
mostrarDados(professor1);
mostrarDados(professor2);

console.log("\n===== FIM DO PROGRAMA =====");
