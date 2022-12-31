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