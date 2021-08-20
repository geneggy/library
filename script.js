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
    title: "Harry Potter4",
    author: "JK Rowling",
    pages: "1983423",
    read: true,
  },
  {
    title: "Harry Potter5",
    author: "JK Rowling",
    pages: "1983423",
    read: true,
  },
];
const booksContainer = document.querySelector(".books-grid");
//modal
const modalContainer = document.querySelector(".modal-container");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

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
  const readBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  bookCard.classList.add("book-card");
  title.classList.add("book-title");
  author.classList.add("book-author");
  pages.classList.add("book-pages");
  readBtn.classList.add("book-read-btn");
  deleteBtn.classList.add("book-delete");
  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages} pages`;
  deleteBtn.textContent = "Remove Book";
  if (book.read) {
    readBtn.textContent = "Read";
    readBtn.classList.add("btn-green");
  } else {
    readBtn.textContent = "Not Read";
    readBtn.classList.add("btn-red");
  }
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readBtn);
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

function removeBookFromLibrary(title) {
  myLibrary = myLibrary.filter((book) => book.title !== title);
  console.log(myLibrary);
}

function toggleRead(e) {
  const title = e.target.closest("div").querySelector(".book-title").innerText;
  const book = myLibrary.find((book) => book.title === title);
  book.read = !book.read;
  if (book.read) {
    e.target.classList.remove("btn-red");
    e.target.classList.add("btn-green");
    e.target.innerText = "Read";
  } else {
    e.target.classList.remove("btn-green");
    e.target.classList.add("btn-red");
    e.target.innerText = "Unread";
  }
}

function toggleModal() {
  modalContainer.classList.toggle("show-modal");
}

//modal submit form
const bookForm = document.querySelector(".modal-form");

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title-input").value;
  const author = document.querySelector("#author-input").value;
  const pages = document.querySelector("#pages-input").value;
  const read = document.querySelector("#read-input").checked;
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  addBook(newBook);
  toggleModal();
});

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

window.addEventListener("click", toggleRead);

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("book-delete")) {
    removeBookFromLibrary(
      e.target.closest("div").querySelector(".book-title").innerText
    );
    e.target.parentNode.remove();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key == "Escape" && modalContainer.classList.contains("show-modal"))
    toggleModal();
});

renderBooks(myLibrary);
