const Library = [];
const shelf = document.querySelector('.bookShelf');

function Book(title, author, pages, read) {

  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.ID = crypto.randomUUID()
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  Library.push(newBook);
  addBook(newBook);
}

function addBook(book) {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');
  bookDiv.textContent = `${book.title} by ${book.author}`;
  shelf.appendChild(bookDiv);
}

const myModal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModal');
const addBookBtn = document.getElementById('addBook');
const closeModalbtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => {
  myModal.showModal();
})
closeModalbtn.addEventListener('click', () => {
  myModal.close();
})

addBookBtn.addEventListener('click', () => {
  const title = document.getElementById('bookTitle').value;
  // do for each element ie author pages etc
  addBookToLibrary(title, author, pages, read)

  myModal.close();
  // for closing modal after clicking the add book button. we need a function that 
  // checks if values are in place(filled out) 
  // and doesnt close/ alerts to fill out all fields 
})