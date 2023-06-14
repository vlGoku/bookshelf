"use strict";

const plus = document.querySelector(".plus");
const addEntry = document.querySelector(".addEntry");
const overlay = document.querySelector(".overlay");

function addBook() {
  plus.addEventListener("click", () => {
    addEntry.classList.add("showEntry");
    overlay.classList.add("showEntry");
  });
}

function remove() {}
addBook();
