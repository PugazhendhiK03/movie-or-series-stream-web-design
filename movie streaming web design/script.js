// menu btn funtions
const menuBtn = document.getElementById("menu-btn");
const sidebarMenu = document.getElementById("sidebar-menu");
const closeButton = document.getElementById("closeButton");


closeButton.addEventListener("click", () => {
    sidebarMenu.style.display = "none";
});

menuBtn.addEventListener("click", () => {
    sidebarMenu.style.display = "block";
});

// movie list button controls :-

// show list btns

const animeList = document.querySelector('.anime-list');
const animeItems = document.querySelectorAll('.anime-list li');
const buttonLeft = document.querySelector('.buttons button:nth-of-type(1)');
const buttonRight = document.querySelector('.buttons button:nth-of-type(2)');
let currentPosition = 0;
const itemWidth = animeItems[0].offsetWidth;

buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);

function moveLeft() {
    if (currentPosition < 0) {
        currentPosition += itemWidth;
        animeList.style.transform = `translateX(${currentPosition}px)`;
    }
}

function moveRight() {
    const listWidth = animeList.offsetWidth;
    const maxPosition = (animeItems.length - 5) * itemWidth;

    if (currentPosition > -maxPosition && listWidth > itemWidth) {
        currentPosition -= itemWidth;
        animeList.style.transform = `translateX(${currentPosition}px)`;
    }
} 

    