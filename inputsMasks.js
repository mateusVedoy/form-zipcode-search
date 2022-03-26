//adicionando mascara ao telefone
document.getElementById('inputCellPhone').addEventListener('keypress', (inputCellphone) => {
    let cellphone = inputCellphone.currentTarget.value.replace(/[( ) \s -]/g, "");
    let pressedKey = inputCellphone.key;
    if(pressedKey != "Backspace" || pressedKey != "Delete"){
        switch(cellphone.length){
            case 1:
                inputCellphone.currentTarget.value = `(${cellphone}`;
            break;
            case 2:
                inputCellphone.currentTarget.value = `(${cellphone}) `;
            break;
            case 3:
                inputCellphone.currentTarget.value += ` `;
            break;
            case 7:
                inputCellphone.currentTarget.value += `-`;
            break;
        }
    }
});

//adicionando mascara ao CPF
document.getElementById('inputCPF').addEventListener('keypress', (inputCPF) => {
    let cpf = inputCPF.currentTarget.value.replace(/[.-]/g,"");
    let pressedKey = inputCPF.key;
    if(pressedKey != "Backspace" || pressedKey != "Delete"){
        switch(cpf.length){
            case 3:
                inputCPF.currentTarget.value += '.';
            break;
            case 6:
                inputCPF.currentTarget.value += '.';
            break;
            case 9:
                inputCPF.currentTarget.value += '-';
            break;
        }
    }
});

//adicionando mascara para o cep
document.getElementById('inputZipCode').addEventListener('keypress', (inputZipCode) => {
    let zipCode = inputZipCode.currentTarget.value.replace(/[.-]/g,"");
    let pressedKey = inputZipCode.key;
    if(pressedKey != "Backspace" || pressedKey != "Delete"){
        switch(zipCode.length){
            case 2:
                inputZipCode.currentTarget.value += '.';
            break;
            case 5:
                inputZipCode.currentTarget.value += '-';
            break;
        }
    }
});
