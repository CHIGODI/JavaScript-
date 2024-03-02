const myLibrary = [];

class Book {
    constructor(title) {
        this.title = title;
    }
};

function addBookToLibrary(book) {
   myLibrary.push(book); 
}

for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
}
