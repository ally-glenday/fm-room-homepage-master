

function toggleHamburgerMenu(){
    const hamburgerMenuIcon = document.getElementById("hamburger-toggle-ul");
    const navHamburgerMenu = document.getElementById("nav-grid-container");
    const toggleIcon = document.getElementById("toggle-icon");
    hamburgerMenuIcon.classList.toggle("display-grid");
    navHamburgerMenu.classList.toggle("hamburger-on-click");
    toggleIcon.classList.toggle("close-icon");
}

if (window.screen.width >= 550 && window.screen.height >= 550) {
    const slideContainer = document.getElementById("slide-button-container");
    document.getElementById("main-section").appendChild(slideContainer);
  }


/* 

1) onclick, display next / prev slide 

2)  create a list of 3 slides, with an index number 0, 1, 2, then go + or - to slide between each slide.
