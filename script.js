const myLibrary = [];

/**
 * Book - defines Book class
 */
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

/**
 * addBook - this function creates an instance of book
 */
function addBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const readCheckbox = document.getElementById('read');

    const bookTitle = titleInput.value.trim();
    const bookAuthor = authorInput.value.trim();
    const bookPages = parseInt(pagesInput.value, 10);
    const read = readCheckbox.checked;
    
    const newBook = new Book(bookTitle, bookAuthor, bookPages, read);
    addBookToLibrary(newBook);

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readCheckbox.checked = false;
    displayLibrary();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    console.log('Library:', myLibrary);
}