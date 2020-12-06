// Hamburger
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const header = document.querySelector('.header');

// Set initial State Of Menu 

let showMenu = false;

hamburger.addEventListener('click', toggleMenu);

// Create a function for toggleMenu

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('close');
        sideMenu.classList.add('show');

        // Set Menu State
        showMenu = true;
    } else {
        hamburger.classList.remove('close');
        sideMenu.classList.remove('show');

        // Set Menu State
        showMenu = false;
    }
}