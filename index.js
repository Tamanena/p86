const navToggle = document.querySelector(".navtoggle");
const navMenu = document.querySelector(".navmenu");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navmenu_visible");
});