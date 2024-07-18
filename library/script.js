const myLibrary = [];
idx = 0;

function Book(title, author, pages, read, description) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.description = description;
    this.id = idx;
    idx ++;

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

function addBookToLibrary(title, author, pages, description, read = false) {
    const newBook = new Book(title, author, pages, read, description)
    myLibrary.push(newBook);
    return newBook;
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 255, "A great adventure story");
addBookToLibrary("The Hello Goodbye Window", "Norton Juster", 32, "Caldecott Medal Winner!")
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 224, "The beginning of it all! text text hello hello filler text to see what happens if i put a lot of filler text here what the heck");

const booksContainer = document.getElementById("books-container");

function addBookToDom(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.id = "book" + book.id;

    const titleAuthor = document.createElement("div");
    titleAuthor.classList.add("title-author");

    const titleHeader = document.createElement("h2");
    titleHeader.textContent = book.title;
    titleAuthor.appendChild(titleHeader);

    const authorText = document.createElement("p");
    authorText.textContent = "by " + book.author;
    titleAuthor.appendChild(authorText);
    bookCard.appendChild(titleAuthor);

    const pagesElement = document.createElement("p");
    const pageLabel = document.createElement("span");
    pageLabel.textContent = "Page count: ";
    pagesElement.appendChild(pageLabel);
    pagesElement.append(book.pages);
    bookCard.append(pagesElement);

    const desc = document.createElement("p");
    desc.classList.add("description");
    desc.textContent = book.description;
    bookCard.append(desc);

    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    if (book.read) {
        readButton.textContent = "Read";
        readButton.classList.add("read-book");
    }
    else {
        readButton.textContent = "Unread";
    }
    bookCard.append(readButton);

    readButton.addEventListener("click", () => {
        if (readButton.classList.contains("read-book")) {
            readButton.classList.remove("read-book");
            readButton.textContent = "Unread";
        }
        else {
            readButton.classList.add("read-book");
            readButton.textContent = "Read";
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    bookCard.append(deleteButton);
    
    deleteButton.addEventListener("click", () => {
        const deleteIdx = myLibrary.indexOf(book);
        const cards = document.querySelectorAll(".book-card");
        
        cards.forEach((card) => {
            if (card.id == "book" + myLibrary[deleteIdx].id) {
                booksContainer.removeChild(card);
                return;
            }
        });
        myLibrary.splice(deleteIdx, 1);
    });

    booksContainer.appendChild(bookCard);
}

myLibrary.forEach((book) => {
    addBookToDom(book);
});

const dialog = document.querySelector("dialog");
dialog.style.display = "none";

function hideDialog() {
    dialog.style.display = "none";
    dialogOverlay.style.display = "none";
}

const dialogOverlay = document.getElementById("dialog-overlay");
dialogOverlay.style.display = "none";
dialogOverlay.addEventListener("click", () => {
    hideDialog();
});

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
    dialogOverlay.style.display = "block";
    dialog.style.display = "flex";
});

const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = addForm.elements["title"].value;
    const author = addForm.elements["author"].value;
    const pages = addForm.elements["pages"].value;
    const description = addForm.elements["description"].value;
    const read = addForm.elements["read"].value;

    const newBook = addBookToLibrary(title, author, pages, description, read);
    addBookToDom(newBook);
    hideDialog();
});