const Library = [];
const shelf = document.querySelector('.bookShelf');
const myModal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModal');
const addBookBtn = document.getElementById('addBook');
const closeModalbtn = document.getElementById('closeModal');



const inputTitle = document.getElementById('bookTitle');
const inputAuthor = document.getElementById('bookAuthor');
const inputPages = document.getElementById('bookPages');
const inputRead = document.getElementById('bookRead');

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
  appendBook(newBook);
 
  return newBook;
}


function appendBook(book) {

  const bookDiv = document.createElement('div');
  bookDiv.className = 'book';
  

  const titleDiv = document.createElement('div');
  titleDiv.className = 'displayTitle';
  titleDiv.textContent = book.title;
  bookDiv.appendChild(titleDiv);


  const authorDiv = document.createElement('div');
  authorDiv.className = 'displayAuthor';
  authorDiv.textContent = book.author;
  bookDiv.appendChild(authorDiv);


  const pagesDiv = document.createElement('div');
  pagesDiv.className = 'displayPages';
  pagesDiv.textContent = book.pages;
  bookDiv.appendChild(pagesDiv);

 
  const readInput = document.createElement('input');
  readInput.type = 'checkbox';
  readInput.className = 'displayRead';
  readInput.checked = !!book.read;
  readInput.addEventListener('change', () => {
    bookDiv.classList.toggle('is-read', readInput.checked);
  });
  bookDiv.appendChild(readInput);


  const delBtn = document.createElement('button');
  delBtn.className = 'deleteBtn';
  delBtn.textContent = 'X';
  delBtn.addEventListener('click', () => {
    Library.splice(Library.findIndex(b => b.ID === book.ID), 1);
    shelf.removeChild(bookDiv);
    console.log(Library)
  });
  bookDiv.appendChild(delBtn);

console.log(Library)
 shelf.appendChild(bookDiv);
}




openModalBtn.addEventListener('click', () => {
  myModal.showModal();
})
closeModalbtn.addEventListener('click', () => {
  myModal.close();
})

addBookBtn.addEventListener('click', () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = Number(inputPages.value);
  const read = Boolean(inputRead.checked)

    if(!title ){
      alert('Please enter a title')
      return
    }
    if(!author ){
      alert('Please enter a author')
      return
    }

    if(!pages || pages <= 0 || Number.isNaN(pages)){
      alert('Please enter a valid pages number')
      return
    }

  addBookToLibrary(title, author, pages, read)

  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  inputRead.checked = false;

  myModal.close();
})



