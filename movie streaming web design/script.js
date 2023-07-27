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


