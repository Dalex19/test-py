import Network from "./network.js";

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
    let dataFinal = {
        'first-name': data.get('firstname'),
        'last-name': data.get('lastname'),
        'user-name': data.get('username'),
        'email' : data.get('email'),
        'password' : data.get('password')
    }    
    let requestPost = new Network();
    requestPost.createreg(dataFinal)
    .then(res => {
        console.log("Register created");
    })
    dataForm.reset();
})

