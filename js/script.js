let userName = ''
while (userName === '' || userName === null || window.onload) {
    userName = prompt('Por favor, escreva aqui o seu nome: ');
    JSON.stringify(userName).toUpperCase();
}

const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');
button.addEventListener('click', add);
form.addEventListener('change', save);


function add() {
    const today = new Date().toLocaleDateString('pt-pt').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today);

    if (dayExists === true) {
        alert(`Atenção ${userName}! este dia ja foi resistado 🚫`);
        return;
    } else {
        alert(`Olá ${userName}!, seu registado com sucesso ✅`);
    }

    nlwSetup.addDay(today);
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};

nlwSetup.setData(data);
nlwSetup.load();
