const icon = document.querySelector('.icon');
const buttons = document.querySelectorAll('.buttonMobile')
const back_button = document.querySelector(".back-to-top");
const menu_items = document.querySelectorAll(`.menu a[href^="#"]`)

function showMenu() {
    var x = document.querySelector(".myLinksMobile");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function srollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target)

    window.scrollTo({
        top: to -130,
        behavior: "smooth",

    })
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

menu_items.forEach(item => {
    item.addEventListener('click', srollToIdOnClick)
})

icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    showMenu()
});

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        icon.classList.toggle("open");
        showMenu()
    });
});

back_button.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
        back_button.style.display = 'block';
    }else {
        back_button.style.display = 'none';
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o redirecionamento padrão

        const formData = new FormData(form);
        
        fetch(form.action, {
            method: form.method,
            body: formData,
            mode: 'no-cors' // Esta linha é importante para evitar problemas de CORS
        }).then(() => {
            alert('Formulário enviado com sucesso!');
            form.reset(); // Reseta o formulário após o envio
        }).catch((error) => {
            alert('Ocorreu um erro ao enviar o formulário.');
            console.error('Error:', error);
        });
    });
});