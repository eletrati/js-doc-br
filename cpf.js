function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 
    if (/^(\d)\1+$/.test(cpf)) return false;
    const calculateDigit = (length) => {
        let sum = Array.from(cpf).map(Number).slice(0, length).reduce((acc, digit, index) => acc + digit * (length + 1 - index), 0);
        return (sum % 11) < 2 ? 0 : 11 - (sum % 11) === Array.from(cpf).map(Number)[length];
    };
    return calculateDigit(9) && calculateDigit(10);
}
