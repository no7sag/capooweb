// Animate on scroll
AOS.init();


// nav
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// galeria.html
let modal = document.querySelector(".modal");
let images = document.getElementsByClassName("modal_img");  // Todas las imágenes
let modalImg = document.querySelector(".modal_content");  // Imagen del modal

for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.addEventListener("click", ()=> {
        modal.style.display = "flex";
        modalImg.src = images[i].src;
    });
};

if (modal) {  // Si hay modal, añadimos el evento
    modal.addEventListener("click", ()=> modal.style.display = "none");
};


// contacto.html
let form = document.querySelector("form");
let inputName = document.querySelector(".form_nombre");
let inputEmail = document.querySelector(".form_email");
let inputScoreAll = document.querySelectorAll(".form-check-input");
let inputComment = document.querySelector(".form_comentario");
let btnSubmit = document.querySelector("form button");
let msgSubmit = document.querySelector(".form_msg_submit");

if (form) {
    form.addEventListener("submit", e=>{
        e.preventDefault();
        const emailValue = inputEmail.value;
        const nameValue = inputName.value;
        const commentValue = inputComment.value;

        if (!/^[a-zA-Z ]+$/.test(nameValue)) {  // Expresiones regulares
            msgSubmit.style.display = "block";
            msgSubmit.textContent = "Por favor, ingrese un nombre válido.";
            inputName.style.borderColor = "#E24C4C";
        }
        else if (!validateEmail(emailValue)) {
            msgSubmit.style.display = "block";
            msgSubmit.textContent = "Por favor, ingrese un e-mail válido.";
            inputEmail.style.borderColor = "#E24C4C";
            inputName.style.borderColor = "#777"
        }
        else if (commentValue.length <= 2) {
            msgSubmit.style.display = "block";
            msgSubmit.textContent = "Por favor, ingrese un comentario.";
            inputComment.style.borderColor = "#E24C4C";
            inputEmail.style.borderColor = "#777"
        }
        else {
            msgSubmit.style.display = "block";
            msgSubmit.textContent = "¡Gracias por su mensaje!";
            msgSubmit.style.color = "#67C167";
            btnSubmit.style.background = "#CCC";
            btnSubmit.style.boxShadow = "inset 0 -3px 7px 0 #AAA";
            btnSubmit.style.color = "#676767";
            inputName.disabled = true;
            inputName.style.background = "#EEE"
            inputEmail.disabled = true;
            inputEmail.style.background = "#EEE"
            inputComment.disabled = true;
            inputComment.style.background = "#EEE"
            inputComment.style.borderColor = "#777"
            for (i in inputScoreAll) {
                inputScoreAll[i].setAttribute("disabled", "")
            }
        }
    })
};


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
