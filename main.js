"use strict";

const plus = document.querySelector(".plus");
const addEntry = document.querySelector(".addEntry");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");

function addBook() {
  plus.addEventListener("click", () => {
    addEntry.classList.add("showEntry");
    overlay.classList.add("showEntry");
    close.classList.add("showEntry");
  });
}

function removeEntry() {
  close.addEventListener("click", () => {
    addEntry.classList.toggle("showEntry");
    overlay.classList.toggle("showEntry");
    close.classList.toggle("showEntry");
  });
}
addBook();
removeEntry();
