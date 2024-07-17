const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        res = this.title + " by " + this.author + ", " + this.pages + " pages, ";
        if (this.read) {
            res += "already read";
        }
        else {
            res += "not read yet";
        }
        return res;
    }
}

function addBookToLibrary(title, author, pages, read = false) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 255, false);
console.log(myLibrary);

const booksContainer = document.getElementById("books-container");
myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.textContent = book.info();
    booksContainer.appendChild(bookCard);
});