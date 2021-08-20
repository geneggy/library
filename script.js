const booksContainer = document.querySelector(".books-grid");
const bookForm = document.querySelector(".modal-form");
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookCardEl = document.createElement("div");
  this.titleEl = document.createElement("h2");
  this.authorEl = document.createElement("h3");
  this.pagesEl = document.createElement("h3");
  this.readEl = document.createElement("p");
  this.deleteBtnEl = document.createElement("button");

  this.bookCardEl.classList.add("book-card");
  this.titleEl.classList.add("book-title");
  this.authorEl.classList.add("book-author");
  this.pagesEl.classList.add("book-pages");
  this.readEl.classList.add("book-read");
  this.deleteBtnEl.classList.add("book-delete");

  this.titleEl.textContent = `${this.title}`;
  this.authorEl.textContent = `${this.author}`;
  this.pagesEl.textContent = `${this.pages} pages`;
  this.readEl.textContent = this.read ? "read" : "unread";
  this.deleteBtnEl.textContent = "Remove Book";

  this.bookCardEl.appendChild(this.titleEl);
  this.bookCardEl.appendChild(this.authorEl);
  this.bookCardEl.appendChild(this.pagesEl);
  this.bookCardEl.appendChild(this.readEl);
  this.bookCardEl.appendChild(this.deleteBtnEl);

  this.deleteBtnEl.addEventListener("click", this.delete);
}

Book.prototype.delete = (e) => {
  e.target.parentNode.remove();
  const index = myLibrary.indexOf(this);
  console.log(this);
  myLibrary.splice(index, 1);
  console.log(myLibrary);
};

//modal
const modalContainer = document.querySelector(".modal-container");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modalContainer.classList.toggle("show-modal");
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

window.addEventListener("keydown", (event) => {
  if (event.key == "Escape" && modalContainer.classList.contains("show-modal"))
    toggleModal();
});

//modal submit form

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title-input").value;
  const author = document.querySelector("#author-input").value;
  const pages = document.querySelector("#pages-input").value;
  const read = document.querySelector("#read-input").checked;
  const newBook = new Book(title, author, pages, read);
  console.log(newBook);
  myLibrary.push(newBook);

  booksContainer.appendChild(newBook.bookCardEl);
  // addBookToLibrary(newBook);
  // addBook(newBook);
  toggleModal();
});

// renderBooks(myLibrary);
