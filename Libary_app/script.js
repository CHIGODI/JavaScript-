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

function displayLibrary() {
    console.log(myLibrary)
    for(let i = 0; i < myLibrary.length; i++){
        const libraryContainer = document.getElementById('library-container');
        console.log(libraryContainer);
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('library-book');
        bookDiv.innerHTML = `<p>Title: ${myLibrary[i].title}</p>
                            <p>Author: ${myLibrary[i].author}</p>
                            <p>Pages: ${myLibrary[i].pages}</p>
                            <p>Read: ${myLibrary[i].read ? 'Yes' : 'No'}</p>`;
    
        libraryContainer.appendChild(bookDiv);
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
    
    if (bookTitle !== '' && bookAuthor !== '' && !isNaN(bookPages)){
        const newBook = new Book(bookTitle, bookAuthor, bookPages, read);
        addBookToLibrary(newBook);
    
        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        readCheckbox.checked = false;
        displayLibrary();
    }
}
function  addBookToLibrary(book){
    myLibrary.push(book);
}

function showForm() {
    const formContainer = document.querySelector('.container');
    const currentDisplay = getComputedStyle(formContainer).display;
    if (currentDisplay === 'none') {
        formContainer.style.display = 'flex';
    } else {
        formContainer.style.display = 'none';
    }
}
