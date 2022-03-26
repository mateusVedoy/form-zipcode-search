
//função que limpa campos de endereço do form
function cleanAddressIputs() {
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputCityNeighborhood').value = '';
    document.getElementById('inputCity').value = '';
    document.getElementById('inputState').value = '';
}

//busca infos a partir do CEP digitado
async function searchAddressByZipCode(cep) {
    try {
        let data = await axios.get(`https://api.postmon.com.br/v1/cep/${cep}`);
        return data;
    } catch (error) {
        return error;
    }

}

//monta os valores nos inputs depois da busca
function assembleAddress(address) {
    document.getElementById('inputAddress').value = address.data.logradouro;
    document.getElementById('inputCityNeighborhood').value = address.data.bairro;
    document.getElementById('inputCity').value = address.data.cidade;
    document.getElementById('inputState').value = address.data.estado;
}

//função para trazer as siglas do input de estado
(async function getUFAcronyms() {
    getStates()
        .then(({ data }) => {
            for (let x = 0; x < data.length; x++) {
                let inputStateOpt = document.createElement('option');
                inputStateOpt.value = data[x].sigla;
                inputStateOpt.innerText = data[x].sigla;
                document.getElementById('inputState').appendChild(inputStateOpt);
            }
        });
})();

//função que faz a requisição das siglas dos estados
async function getStates() {
    try {
        return await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
    } catch (error) {
        return error;
    }
}

//função que faz o calc para validar cpf
function isCPFValid(cpf) {
    let cpfArr = cpf.replace(/[.-]/g, "").split('');
    let cpfSum = 0;
    for (x = 0, y = 10; x < 9; x++, y--) {
        cpfSum += cpfArr[x] * y;
    }
    let firstDigit = cpfSum % 11;
    firstDigit = 11 - firstDigit;
    if (firstDigit >= 10) {
        firstDigit = 0;
    }
    cpfSum = 0;
    for (x = 0, y = 11; x <= 9; x++, y--) {
        cpfSum += cpfArr[x] * y;
    }
    let secondDigit = cpfSum % 11;
    secondDigit = 11 - secondDigit;
    if (secondDigit >= 10) {
        secondDigit = 0;
    }
    if (firstDigit == cpfArr[9] && secondDigit == cpfArr[10]) {
        return true;
    } else {
        return false;
    }
}

//verifica dados do form ao submeter
document.getElementById('form').addEventListener('submit', (target) => {
    document.querySelectorAll('.inputClass')
        .forEach((formInpt) => {
            if (formInpt.value.length == 0) {
                formInpt.focus();
                target.preventDefault();
            } else {
                if (formInpt.id == "inputCPF") {
                    if (!isCPFValid(formInpt.value)) formInpt.classList.add('inputError');
                    target.preventDefault();
                }
            }
        });
});

//limpa tela ao clicar no btn de limpar
document.getElementById('cleanBtn').addEventListener('click', () => {
    Toastify({
        text: "Você está prestes a limpar o formulário",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: {
            background: "red"
        },
        onClick: cleanForm(document.getElementById('form'))
    }).showToast();
});

//função que limpa o formulário
function cleanForm(form){
    //setimeout apenas para dar um delay da msg toastify e deleção dos dados
    setTimeout(() => {
        form.reset();
    }, 2000);
}