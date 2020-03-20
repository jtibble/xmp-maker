// ==UserScript==
// @name         Copy Pixieset Favs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       John Tibble
// @match        https://pixieset.com/collection/favoriteview/*
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

     const list = Array.from(document.querySelectorAll('span.heading')).map(e => e.innerText);

    const stringifiedList = JSON.stringify(list);

    await navigator.clipboard.writeText(stringifiedList);

    alert("Favorites copied to clipboard!");
})();