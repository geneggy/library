const booksContainer = document.querySelector(".books-grid");
const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const bookForm = document.querySelector(".modal-form");

let myLibrary = [];

class Book {
  constructor(book) {
    this.book = book;
    this.removeBookFromLibrary = this.removeBookFromLibrary.bind(this);
    this.toggleRead = this.toggleRead.bind(this);
  }
  newBookElement() {
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
    title.textContent = `${this.book.title}`;
    author.textContent = `${this.book.author}`;
    pages.textContent = `${this.book.pages} pages`;
    deleteBtn.textContent = "Remove Book";

    if (this.book.read) {
      readBtn.textContent = "Read";
      readBtn.classList.add("btn-green");
    } else {
      readBtn.textContent = "Not Read";
      readBtn.classList.add("btn-red");
    }

    deleteBtn.addEventListener(
      "click",
      (e) => {
        this.removeBookFromLibrary();
        e.target.parentNode.remove();
      },
      { once: true }
    );

    readBtn.addEventListener("click", (e) => {
      this.toggleRead();
      console.log(myLibrary);
      if (this.book.read) {
        e.target.classList.remove("btn-red");
        e.target.classList.add("btn-green");
        e.target.innerText = "Read";
      } else {
        e.target.classList.remove("btn-green");
        e.target.classList.add("btn-red");
        e.target.innerText = "Unread";
      }
    });

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);
    booksContainer.appendChild(bookCard);
  }

  toggleRead() {
    this.book.read = !this.book.read;
  }
  removeBookFromDOM(e) {}

  addBookToLibrary() {
    myLibrary.push(this);
  }

  removeBookFromLibrary(e) {
    myLibrary = myLibrary.filter((item) => {
      item.title !== this.book.title;
    });
  }
}

function toggleModal() {
  modalContainer.classList.toggle("show-modal");
}

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title-input").value;
  const author = document.querySelector("#author-input").value;
  const pages = document.querySelector("#pages-input").value;
  const read = document.querySelector("#read-input").checked;
  const newBook = new Book({ title, author, pages, read });
  newBook.addBookToLibrary();
  newBook.newBookElement();
  toggleModal();
});

modalTrigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

window.addEventListener("keydown", (event) => {
  if (event.key == "Escape" && modalContainer.classList.contains("show-modal"))
    toggleModal();
});
