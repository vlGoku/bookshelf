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
const container = document.querySelector(".container");

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
  let newBookDiv = document.createElement("div");
  let currentBook = library[library.length - 1];

  newBookDiv.innerHTML = `
      <div class="buch">
        <h2 class="titleBook">${currentBook.title}</h2>
        <li class="author">${currentBook.author}</li>
        <li class="pages">${currentBook.pages}</li>
        <li class="genre">${currentBook.genre}</li>
        <li class="price">${currentBook.price}</li>
        <li class="read_status">${
          currentBook.read_status ? "Gelesen" : "Nicht gelesen"
        } </li>
      </div>
    `;
  container.appendChild(newBookDiv);
}
