"use strict"

document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const counterElement = document.getElementById("counter");
    const button = document.getElementById("increment");

    button.addEventListener("click", () => {
        count++;
        counterElement.innerText = count; // Direct DOM update
    });
});