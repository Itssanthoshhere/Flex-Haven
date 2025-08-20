
const header = document.querySelector(".header");
const menuBar = document.querySelector(".menu-bar");
const navbar = document.querySelector(".navbar");
const navlinks = document.querySelectorAll(".navlink");
const close = document.querySelector(".close");

window.addEventListener("scroll", () => {
    header.classList.toggle("active", window.scrollY > 50);
})

// Open/close menu
menuBar.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu on 'X' button
close.addEventListener("click", () => {
    navbar.classList.remove("active");
});

// Auto close when link is clicked
navlinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});