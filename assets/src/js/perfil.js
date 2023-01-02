/* Pull Informations. ---------------------------------------------------------------------- */

const Name = localStorage.getItem('name')
const LastName = localStorage.getItem('LastName')
const email = localStorage.getItem('email')
const password = localStorage.getItem('password')

const getFullName = Name + ' ' + LastName

const LocalName = document.querySelector('.local-nome')
const localEmail = document.querySelector('.local-email')
const localSenha = document.querySelector('.local-senha')

LocalName.innerHTML = getFullName;
localEmail.innerHTML = email;
localSenha.innerHTML = password;

/* Sign Out ---------------------------------------------------------------------- */

const SignOut = document.querySelector('#sign-out')
SignOut.addEventListener('click', () => {
    location.href = 'index.html'
    localStorage.clear()
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