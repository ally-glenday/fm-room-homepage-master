function toggleHamburgerMenu(){
    const hamburgerMenuIcon = document.getElementById("hamburger-toggle-ul");
    const navHamburgerMenu = document.getElementById("nav-flexbox-container");
    hamburgerMenuIcon.classList.toggle("display-flex");
    navHamburgerMenu.classList.toggle("hamburger-on-click");
}