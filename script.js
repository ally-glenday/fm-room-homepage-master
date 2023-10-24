function toggleHamburgerMenu(){
    const hamburgerMenuIcon = document.getElementById("hamburger-toggle-ul");
    const navHamburgerMenu = document.getElementById("nav-grid-container");
    hamburgerMenuIcon.classList.toggle("display-grid");
    navHamburgerMenu.classList.toggle("hamburger-on-click");
}