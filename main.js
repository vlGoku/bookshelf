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
const readStatus = document.querySelector("#read_status");
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

function removeBook(i) {
  library.splice(i, 1);
  container.innerHTML = "";
  addBookToOverlay();
}

function changeBook(element) {
  if (element.textContent == "Gelesen") {
    element.textContent = "Nicht gelesen";
  } else if (element.textContent == "Nicht gelesen") {
    element.textContent = "Gelesen";
  }
}

addBook();
removeEntry();

let library = [];

function Book(title, author, pages, genre, price, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.price = price;
  this.read = readStatus;
}

function addBookToLibrary() {
  btn_senden.addEventListener("click", () => {
    addEntry.classList.remove("showEntry");
    overlay.classList.remove("showEntry");
    btnclose.classList.remove("showEntry");
    if (
      title.value !== "" &&
      author.value !== "" &&
      pages.value !== "" &&
      genre.value !== "" &&
      price.value !== ""
    ) {
      const book = new Book(
        title.value,
        author.value,
        parseInt(pages.value),
        genre.value,
        parseInt(price.value),
        readStatus.checked
      );
      library.push(book);
      clearForm();
      addBookToOverlay(title.value);
    } else {
      alertDiv.innerHTML = `<div>Bitte füllen Sie alle Felder aus!</div>`;
    }
  });
}
addBookToLibrary();

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  genre.value = "";
  price.value = "";
  readStatus.checked = false;
}

function addBookToOverlay(title) {
  container.innerHTML = "";
  library.forEach((currentBook, i) => {
    const red = Math.floor(Math.random() * 255 + 150);
    const green = Math.floor(Math.random() * 255 + 150);
    const blue = Math.floor(Math.random() * 255 + 150);
    let newBookDiv = document.createElement("div");
    newBookDiv.innerHTML = `
      <div class="buch" style="background-color: rgb(${red}, ${green},${blue})")>
        <h2 class="titleBook">${currentBook.title}</h2>
        <li class="author">${currentBook.author}</li>
        <li class="pages">${currentBook.pages}</li>
        <li class="genre">${currentBook.genre}</li>
        <li class="price">${currentBook.price}€</li>
        <li class="read_status">${
          currentBook.read ? "Gelesen" : "Nicht gelesen"
        }</li>
        <button class="change-status"><i class="change-book far fa-edit"></i></button>
        <button class="remove" onclick="removeBook(${i})"><i class="delete-book far fa-trash-alt"></i></button>
       </div>
    `;
    container.appendChild(newBookDiv);
    newBookDiv.classList.add("animate-book");
  });
}

const addEventBook = (rootElement) => {
  rootElement.addEventListener(
    "click",
    (e) => {
      let targetElement = e.target;
      if (targetElement.matches(".delete-book")) {
        targetElement = targetElement.parentElement;
      }
      if (targetElement.matches(".change-book")) {
        let btnElement = targetElement;
        let element = btnElement.parentElement.parentElement.childNodes[11];
        changeBook(element);
      }
    },
    true
  );
};
addEventBook(container, "click");
