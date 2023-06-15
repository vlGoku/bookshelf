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
const read_status = document.querySelector("#read_status");

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

let library = [];

function Book(title, author, pages, genre, price, read_status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.price = price;
  this.read = read_status;
}

function addBookToLibrary() {
  btn_senden.addEventListener("click", () => {
    addEntry.classList.remove("showEntry");
    overlay.classList.remove("showEntry");
    btnclose.classList.remove("showEntry");
    const book = new Book(
      title.value,
      author.value,
      parseInt(pages.value),
      genre.value,
      parseInt(price.value),
      read_status.checked
    );
    library.push(book);
    clearForm();
    addBookToOverlay(title.value);
  });
}
addBookToLibrary();

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  genre.value = "";
  price.value = "";
  read_status.checked = false;
}

function addBookToOverlay(title) {
  for (let i = 0; i < library.length; i++);

  let newBookDiv = document.createElement("div");

  newBookDiv.innerHTML = `
  <div class="buch" data-index="${i}">
  <h3 class="title">${book.title}</h3>
  <div class="cover">
  <p class="author">${book.author}</p>
  <p class="pages">${book.pages}</p>
  <p class="genre">${book.genre}</p>
  <p class="price">${book.price}</p>
  <p class="read-status">${book.read_status ? "Gelesen" : "Nicht gelesen"}</p>
  `;
  main.appendChild(newBookDiv);
}
