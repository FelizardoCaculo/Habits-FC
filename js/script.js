const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');
button.addEventListener('click', add);
form.addEventListener('change', save);


function add() {
    const today = new Date().toLocaleDateString('pt-pt').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today);

    if (dayExists === true) {
        alert('Atenção! este dia ja foi resistado 🚫');
        return;
    } else {
        alert('Dia registado com sucesso ✅');
    }

    nlwSetup.addDay(today);
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
console.log(data)

nlwSetup.setData(data);
nlwSetup.load();
