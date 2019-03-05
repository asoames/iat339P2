// Source: https://www.cssscript.com/basic-hamburger-toggle-menu-css-vanilla-javascript/
"use strict";
console.log("Script started");

var nav = document.querySelector(".main-nav:not(.style-guide)");
nav.setAttribute('aria-hidden', 'true');
nav.setAttribute('aria-labelledby', 'menu-toggle');

var navButton = document.querySelectorAll(".main-nav:not(.style-guide) .nav-button");
for (var i = 0; i < navButton.length; i++) {
    navButton[i].setAttribute('tabindex', '-1');
}

var toggle = document.querySelector(".toggle:not(.style-guide)");
toggle.setAttribute('aria-label', 'Menu');
toggle.setAttribute('aria-controls', 'menu'); // Note this connects to an ID
toggle.setAttribute('aria-expanded', 'false');

toggle.addEventListener("click", function () {
    console.log("Clicked");
    if (toggle.classList.contains("expanded")) {
        toggle.classList.remove("expanded");

        nav.style.maxHeight = null;
        nav.setAttribute('aria-hidden', 'true');
        nav.setAttribute('aria-expanded', 'false');

        for (var i = 0; i < navButton.length; i++) {
            navButton[i].setAttribute('tabindex', '-1');
        }
    } else {
        toggle.classList.add("expanded");


        nav.style.maxHeight = nav.scrollHeight + "px";
        nav.setAttribute('aria-hidden', 'false');
        nav.setAttribute('aria-expanded', 'true');

        for (var i = 0; i < navButton.length; i++) {
            navButton[i].setAttribute('tabindex', '0');
        }
    }
});

function resetNav(x) {
    if (x.matches) {
        toggle.classList.remove("expanded");
        nav.style.maxHeight = null;
        nav.setAttribute('aria-hidden', 'true');
        nav.setAttribute('aria-expanded', 'false');

        for (var i = 0; i < navButton.length; i++) {
            navButton[i].setAttribute('tabindex', '-1');
        }
    }
}

var breakpoint = window.matchMedia("(min-width: 40rem)");
resetNav(breakpoint);
breakpoint.addListener(resetNav);