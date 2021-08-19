let myLibrary = [
  { title: "Harry Potter", author: "JK Rowling", pages: "1983423", read: true },
  {
    title: "Harry Potter2",
    author: "JK Rowling",
    pages: "1983423",
    read: false,
  },
  {
    title: "Harry Potter3",
    author: "JK Rowling",
    pages: "1983423",
    read: true,
  },
  {
    title: "Harry Potter3",
    author: "JK Rowling",
    pages: "1983423",
    read: true,
  },
  {
    title: "Harry Potter3",
    author: "JK Rowling",
    pages: "1983423",
    read: true,
  },
];
const booksContainer = document.querySelector(".books-grid");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("h2");
  const author = document.createElement("h3");
  const pages = document.createElement("h3");
  const read = document.createElement("p");
  const deleteBtn = document.createElement("button");

  bookCard.classList.add("book-card");
  title.classList.add("book-title");
  author.classList.add("book-author");
  pages.classList.add("book-pages");
  read.classList.add("book-read");
  deleteBtn.classList.add("book-delete");
  bookCard.setAttribute("data-index", myLibrary.indexOf(book));

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages} pages`;
  read.textContent = book.read ? "read" : "unread";
  deleteBtn.textContent = "Remove Book";

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);
  bookCard.appendChild(deleteBtn);

  booksContainer.appendChild(bookCard);
}

function renderBooks(books) {
  books.forEach((book) => {
    addBook(book);
  });
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

//modal
const modalContainer = document.querySelector(".modal-container");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modalContainer.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modalContainer) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

renderBooks(myLibrary);
