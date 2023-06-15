"use strict";

const plus = document.querySelector(".plus");
const addEntry = document.querySelector(".addEntry");
const overlay = document.querySelector(".overlay");
const btnclose = document.querySelector(".btn_cancel");
const btn_senden = document.querySelector(".btn_senden");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const genre = document.querySelector("#genre");
const price = document.querySelector("#price");
const read-status = document.querySelector("#read-status");

function addBook() {
  plus.addEventListener("click", () => {
    addEntry.classList.add("showEntry");
    overlay.classList.add("showEntry");
    btnclose.classList.add("showEntry");
  });
}

function removeEntry() {
  btnclose.addEventListener("click", () => {
    addEntry.classList.remove("showEntry");
    overlay.classList.remove("showEntry");
    btnclose.classList.remove("showEntry");
  });
}
addBook();
removeEntry();

/* let library = []; */

/* function Book(title, author, pages, genre, price,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.price = price;
  this.read-status = read-status;
} */

/* function addBookToLibrary() {
  const book = new Book(
    title.value,
    author.value,
    parseInt(pages.value),
    parseInt(price.value),
    read-status.checked
  );
  library.push(book);
  clearForm();
} */

/* function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  genre.value = "";
  price.value = "";
  read-status.checked = false;
} */

/* btn_senden.addEventListener("click", addBookToLibrary); */

