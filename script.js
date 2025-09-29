const Library = [];

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
}

addBookToLibrary('jayden', 'dsad', 135, true)
addBookToLibrary('stone', 'dsawqed', 185, false)




