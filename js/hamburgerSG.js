// Source: https://www.cssscript.com/basic-hamburger-toggle-menu-css-vanilla-javascript/
"use strict";
console.log("Script started");

var navSG = document.querySelector(".main-nav.style-guide");
navSG.setAttribute('aria-hidden', 'true');
navSG.setAttribute('aria-labelledby', 'menu-toggleSG');

var navSGButton = document.querySelectorAll(".main-nav.style-guide .nav-button");
for (var i = 0; i < navSGButton.length; i++) {
    navSGButton[i].setAttribute('tabindex', '-1');
}

var toggleSG = document.querySelector(".toggle.style-guide");
toggleSG.setAttribute('aria-label', 'Menu');
toggleSG.setAttribute('aria-controls', 'menuSG'); // Note this connects to an ID
toggleSG.setAttribute('aria-expanded', 'false');

toggleSG.addEventListener("click", function () {
    console.log("Clicked");
    if (toggleSG.classList.contains("expanded")) {
        toggleSG.classList.remove("expanded");

        navSG.style.maxHeight = null;
        navSG.setAttribute('aria-hidden', 'true');
        navSG.setAttribute('aria-expanded', 'false');

        for (var i = 0; i < navSGButton.length; i++) {
            navSGButton[i].setAttribute('tabindex', '-1');
        }
    } else {
        toggleSG.classList.add("expanded");

        navSG.style.maxHeight = nav.scrollHeight + "px";
        navSG.setAttribute('aria-hidden', 'false');
        navSG.setAttribute('aria-expanded', 'true');

        for (var i = 0; i < navSGButton.length; i++) {
            navSGButton[i].setAttribute('tabindex', '-0');
        }
    }
});

function resetNav(x) {
    if (x.matches) {
        toggleSG.classList.remove("expanded");
        navSG.style.maxHeight = null;
        navSG.setAttribute('aria-hidden', 'true');
        navSG.setAttribute('aria-expanded', 'false');

        for (var i = 0; i < navSGButton.length; i++) {
            navSGButton[i].setAttribute('tabindex', '-1');
        }
    }
}

var breakpoint = window.matchMedia("(min-width: 40rem)");
resetNav(breakpoint);
breakpoint.addListener(resetNav);