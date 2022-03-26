
//valida formato do cep e preenche os campso de endereço
document.getElementById('inputZipCode').addEventListener('change', (cep) => {
    let zipCodePattern = /\d{2}[.]?\d{3}-?\d{3}/;
    let isValid = zipCodePattern.test(cep.currentTarget.value);
    if (!isValid) {
        cep.currentTarget.classList.add('inputError');
    } else {
        cep.currentTarget.classList.remove('inputError');
        searchAddressByZipCode(cep.currentTarget.value.replace(/[.-]/g,"")).then(data => {
            assembleAddress(data);
        }).catch(() => {
            cleanAddressIputs();
        });
    }
});

//valida formato do telefone celular
document.getElementById('inputCellPhone').addEventListener('change', (celular) => {
    let cellPhonePattern = /^[(]?\d{2}[)]?\s?[9]\s?\d{4}-?\d{4}/;
    let isValid = cellPhonePattern.test(celular.currentTarget.value);
    if(!isValid){
        document.getElementById('inputCellPhone').classList.add('inputError');
    }else{
        document.getElementById('inputCellPhone').classList.remove('inputError'); 
    }
});

//valida formato do cpf
document.getElementById('inputCPF').addEventListener('change', (cpf) => {
    let cpfPattern = /\d{3}[.]?\d{3}[.]?\d{3}-?\d{2}/;
    let isValid = cpfPattern.test(cpf.currentTarget.value);
    if(!isValid){
        document.getElementById('inputCPF').classList.add('inputError');
    }else{
        document.getElementById('inputCPF').classList.remove('inputError');
    }
});