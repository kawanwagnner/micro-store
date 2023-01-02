/* saving Informations ---------------------------------------------------------------------- */

const btn = document.querySelector('#send-informations')
btn.addEventListener('click', () => {

    const LocalName = document.querySelector('#box-firstname').value;
    const LocalLastName = document.querySelector('#box-lastname').value;
    const LocalEmail = document.querySelector('#box-email').value;
    const LocalPassword = document.querySelector('#box-password').value;

    const User = {}
    User.firstName = localStorage.setItem('name', LocalName);
    User.LastName = localStorage.setItem('LastName', LocalLastName);
    User.email = localStorage.setItem('email', LocalEmail);
    User.password = localStorage.setItem('password', LocalPassword);

    /* Validation ..in informations ---------------------------------------------------------------------- */

    if (LocalName.length == '' || LocalName.length < 3) {
        alert('Nome deve conter um mínimo de 3 Caracteres.')
    } else if (LocalLastName.length == '' || LocalLastName.length < 3) {
        alert('Sobrenome deve conter um mínimo de 3 Caracteres.')
    } else if (LocalEmail.length == '' || LocalEmail < 10) {
        alert('Digite um E-mail válido!.')
    } else if (LocalPassword.length < 8) {
        alert('Senha deve conter um mínimo de 8 dígitos.')
    } else {
        alert('Bem-Vindo(a)')
        location.href = 'perfil.html'
    }
})

/* Menu NavBar. ---------------------------------------------------------------------- */

const btnMenu = document.querySelector('#btn-menu'); 

btnMenu.addEventListener('click', () => {
    const navbar = document.querySelector('#navbar'); 

    navbar.classList.toggle('active'); 
    if (btnMenu.innerHTML == 'X') {
        btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'; 
        document.body.style.overflow = 'auto'
    } else {
        btnMenu.innerHTML = 'X'; 
        document.body.style.overflow = 'hidden'
    }
})