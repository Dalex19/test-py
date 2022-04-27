const [register, signIn] = document.querySelectorAll('.js-btn');
const home = document.querySelector('.container');
const registerContainer = document.querySelector('.container__register');
const btnClosed = document.getElementById('btn-closed');
const dataForm = document.getElementById('dataForm');

register.addEventListener('click', () => {
    home.style.opacity = '0';
    registerContainer.style.opacity = '1';
    registerContainer.style.zIndex = '20';
});

btnClosed.addEventListener('click', () => {
    home.style.opacity = '1';
    registerContainer.style.opacity = '0';
    registerContainer.style.zIndex = '5';
})
dataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(dataForm);
    sendData(data);
})
const sendData = (data) => {
    console.log(data)
}
/*const sendData = (dataForm, serversrc) => {

    fetch(`${serversrc}`, {
        method: 'POST',
        body: dataForm
     })
     .then(function(response) {
        if(response.ok) {
            return response.text()
        } else {
            throw "Error en la llamada Ajax";
        }
     
     })
     .then(function(texto) {
        console.log(texto);
     })
     .catch(function(err) {
        console.log(err);
     });
}*/