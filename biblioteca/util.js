// Biblioteca de funções de validação

function validarEmail(email) {
    if (typeof email !== "string") {
        return false;
    }

    // Deve conter @ e terminar com .com ou .edu.br
    const regex = /^[^\s@]+@[^\s@]+\.(com|edu\.br)$/;

    return regex.test(email);
}

function validarMatricula(matricula) {
    if (typeof matricula !== "string") {
        return false;
    }

    // Matrícula deve conter somente números e ter entre 5 e 10 dígitos
    const regex = /^\d{5,10}$/;

    return regex.test(matricula);
}

function validarCPF(cpf) {
    if (typeof cpf !== "string") {
        return false;
    }

    // Remove pontos e hífen
    cpf = cpf.replace(/[.-]/g, "");

    // CPF deve possuir exatamente 11 números
    if (!/^\d{11}$/.test(cpf)) {
        return false;
    }

    // Não aceita CPF com todos os números iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Validação do primeiro dígito
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Validação do segundo dígito
    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    return resto === parseInt(cpf.charAt(10));
}

module.exports = {
    validarEmail,
    validarMatricula,
    validarCPF
};
