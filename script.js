function toggleHamburgerMenu(){
    const hamburgerMenuIcon = document.getElementById("hamburger-toggle-ul");
    const navHamburgerMenu = document.getElementById("nav-grid-container");
    const toggleIcon = document.getElementById("toggle-icon");
    hamburgerMenuIcon.classList.toggle("display-grid");
    navHamburgerMenu.classList.toggle("hamburger-on-click");
    toggleIcon.classList.toggle("close-icon");
}