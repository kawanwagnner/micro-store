/* Menu NavBar. ---------------------------------------------------------------------- */

const btn = document.querySelector('#btn-menu'); 

btn.addEventListener('click', () => {
    const navbar = document.querySelector('#navbar'); 

    navbar.classList.toggle('active'); 
    if (btn.innerHTML == 'X') {
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>'; 
        document.body.style.overflow = 'auto'
    } else {
        btn.innerHTML = 'X'; 
        document.body.style.overflow = 'hidden'
    }
})

/* Referência Perfil with Pop-UP. ---------------------------------------------------------------------- */

const hrefPerfil = document.querySelector('#href-perfil')
hrefPerfil.addEventListener("click", () => {
    const containerPopUp = document.querySelector('.container-popup')
    
    containerPopUp.style.display = 'block'
})

const closepopUp = document.querySelector('.close-popup')
closepopUp.addEventListener('click', () => {
    const containerPopUp = document.querySelector('.container-popup')

    containerPopUp.style.display = 'none'
})

const closepopUpYes = document.querySelector('.yes')
closepopUpYes.addEventListener('click', () => {
    const containerPopUpYes = document.querySelector('.container-popup')

    containerPopUpYes.style.display = 'none'
    location.href = 'perfil.html'
})

const closepopUpNo = document.querySelector('.no')
closepopUpNo.addEventListener('click', () => {
    const containerPopUpNo = document.querySelector('.container-popup')

    containerPopUpNo.style.display = 'none'
    location.href = 'cadastro.html'
})


/* Scroll Reveal. ---------------------------------------------------------------------- */

window.sr = ScrollReveal({ reset: true });

sr.reveal('.container-txt', { 
    rotate: {x: 1000, y: 20, z: 0}, duration: 2000 
})

sr.reveal('#logo', { duration: 2000 });

sr.reveal('#rodape', { duration: 2000 });

sr.reveal('#btn-produtos', { duration: 2000 });

sr.reveal('.produto', { duration: 1000 });

sr.reveal('.produto-2', { duration: 2000 });

/* Avisos -------------------------------------------------------------------------------  */

const btnBuy = document.querySelectorAll('.buy')
btnBuy[0].addEventListener('click', () => {
    
    alert('Será gerado um código na mensagem a ser enviada, onde conseguirei distingir os produtos. Por gentileza não apagar. 😊')
})

btnBuy[1].addEventListener('click', () => {
    
    alert('Será gerado um código na mensagem a ser enviada, onde conseguirei distingir os produtos. Por gentileza não apagar. 😊')
})

btnBuy[2].addEventListener('click', () => {
    
    alert('Será gerado um código na mensagem a ser enviada, onde conseguirei distingir os produtos. Por gentileza não apagar. 😊')
})

btnBuy[3].addEventListener('click', () => {
    
    alert('Será gerado um código na mensagem a ser enviada, onde conseguirei distingir os produtos. Por gentileza não apagar. 😊')
})

btnBuy[4].addEventListener('click', () => {
    
    alert('Será gerado um código na mensagem a ser enviada, onde conseguirei distingir os produtos. Por gentileza não apagar. 😊')
})

btnBuy[5].addEventListener('click', () => {
    
    alert('Será gerado um código na mensagem a ser enviada, onde conseguirei distingir os produtos. Por gentileza não apagar. 😊')
})

btnBuy[6].addEventListener('click', () => {
    
    alert('Será gerado um código na mensagem a ser enviada, onde conseguirei distingir os produtos. Por gentileza não apagar. 😊')
})

btnBuy[7].addEventListener('click', () => {
    
    alert('Será gerado um código na mensagem a ser enviada, onde conseguirei distingir os produtos. Por gentileza não apagar. 😊')
})