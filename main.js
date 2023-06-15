"use strict";

const plus = document.querySelector(".plus");
const addEntry = document.querySelector(".addEntry");
const overlay = document.querySelector(".overlay");
const cancelOverlay = document.querySelector(".btn_cancel");

function addBook() {
  plus.addEventListener("click", () => {
    addEntry.classList.add("showEntry");
    overlay.classList.add("showEntry");
  });
}

function cancelOverlay() {
  cancelOverlay.addEventListener("click", () => {
    addEntry.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
}

addBook();
cancelOverlay();
