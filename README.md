# Bookshelf

This is a bookshelf. You can add some books to your collection and change the read status. You are also able to delete the book you don´t want to have anymore.

I have a removeEntry function, which removes the overlay for adding a book, unless you click on the "+" to add one

```
function removeEntry() {
  btnclose.addEventListener("click", () => {
    addEntry.classList.remove("showEntry");
    overlay.classList.remove("showEntry");
    btnclose.classList.remove("showEntry");
  });
}
```

The functions you see below are to add a book to the collection, remove a book or to change the read status

```
function addBook() {
  plus.addEventListener("click", () => {
    addEntry.classList.add("showEntry");
    overlay.classList.add("showEntry");
    btnclose.classList.add("showEntry");
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
```

The functions addBookToLibrary and addBookToOverlay are for, adding books to the array called library and to add a book to the interface

Last but not least, the function below "listens" whether the user clicked on remove or to change the read status

```
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
```

function init() starts all the other functions
