// Source: https://www.cssscript.com/basic-hamburger-toggle-menu-css-vanilla-javascript/
"use strict";

"use strict";
console.log("Script started");

var nav = document.querySelector(".nav");
nav.setAttribute('aria-hidden', 'true');
nav.setAttribute('aria-labelledby', 'menu-toggle');

var toggle = document.querySelector(".toggle");
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
    } else {
        toggle.classList.add("expanded");

        nav.style.maxHeight = nav.scrollHeight + "px";
        nav.setAttribute('aria-hidden', 'false');
        nav.setAttribute('aria-expanded', 'true');
    }
});

function resetNav(x) {
    if (x.matches) {
        toggle.classList.remove("expanded");
        nav.style.maxHeight = null;
    }
}

var breakpoint = window.matchMedia("(min-width: 40rem)");
resetNav(breakpoint);
breakpoint.addListener(resetNav);