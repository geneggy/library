let myLibrary = [
  // { title: "Harry Potter", author: "JK Rowling", pages: "1983423", read: true },
  // {
  //   title: "Harry Potter2",
  //   author: "JK Rowling",
  //   pages: "1983423",
  //   read: false,
  // },
  // {
  //   title: "Harry Potter3",
  //   author: "JK Rowling",
  //   pages: "1983423",
  //   read: true,
  // },
  // {
  //   title: "Harry Potter3",
  //   author: "JK Rowling",
  //   pages: "1983423",
  //   read: true,
  // },
  // {
  //   title: "Harry Potter3",
  //   author: "JK Rowling",
  //   pages: "1983423",
  //   read: true,
  // },
];
const booksContainer = document.querySelector(".books-grid");

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
  // this.deleteBtnEl.addEventListener("click", this.delete);
}

// Book.prototype.delete = () => {
//   this.bookCardEl.remove();
//   const index = myLibrary.indexOf(this);
//   myLibrary.splice(index, 1);
// };
/*function addBook(book) {
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
} */

// window.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.classList.contains("book-delete")) {
//     console.log(e.target.parentNode);
//     console.log(myLibrary);
//     //remove book from library - this doesnt work becuase after you remove one element the entire array shifts which throws off data-index connection
//     removeBookFromLibrary(e.target.parentNode.dataset.index);
//     //remove entire book from dom
//     e.target.parentNode.remove();
//   }
// });

// function renderBooks(books) {
//   books.forEach((book) => {
//     new Book(book);
//     // addBook(book);
//   });
// }

// function addBookToLibrary(book) {
//   myLibrary.push(book);
// }

// function removeBookFromLibrary(book) {
//   myLibrary.splice(index, 1);
// }

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
const bookForm = document.querySelector(".modal-form");

bookForm.addEventListener("submit", (event) => {
  const title = document.querySelector("#title-input").value;
  const author = document.querySelector("#author-input").value;
  const pages = document.querySelector("#pages-input").value;
  const read = document.querySelector("#read-input").checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  booksContainer.appendChild(newBook.bookCardEl);
  // addBookToLibrary(newBook);
  // addBook(newBook);
  toggleModal();
});

// renderBooks(myLibrary);
