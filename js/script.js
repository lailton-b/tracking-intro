const menuHamburguer = document.querySelector(".menu-hamburguer");
const menu = document.querySelector("nav");

function toggleMenu() {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menuHamburguer.querySelector('img').src = "images/icon-hamburger.svg";
    } else {
        menu.classList.add("open");
        menuHamburguer.querySelector('img').src = "images/icon-close.svg";
    }
}

menuHamburguer.addEventListener('click', toggleMenu);