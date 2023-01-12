function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g,''); // remove qualquer caracter que não seja dígito
    if(cpf === '' || cpf.length !== 11) return false;
    let cpfNumbers = Array.from(cpf);
    let sum = 0;
    for (let i = 0; i < cpfNumbers.length-2; i++) {
        sum += cpfNumbers[i] * (cpfNumbers.length-1 - i);
    }
    let firstDigit = sum % 11;
    firstDigit = firstDigit < 2 ? 0 : 11 - firstDigit;
    if (firstDigit !== parseInt(cpfNumbers[9])) {
        return false;
    }
    sum = 0;
    for (let i = 0; i < cpfNumbers.length-1; i++) {
        sum += cpfNumbers[i] * (cpfNumbers.length - i);
    }
    let secondDigit = sum % 11;
    secondDigit = secondDigit < 2 ? 0 : 11 - secondDigit;
    if (secondDigit !== parseInt(cpfNumbers[10])) {
        return false;
    }
    return true;
}
