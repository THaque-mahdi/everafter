
const menu = document.querySelector(".navbar");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = 'none';
    menuBtn.style.display = "inline-block";
};

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
});

closeBtn.addEventListener('click', closeNav)
