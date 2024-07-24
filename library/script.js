// contains all our books
const myLibrary = [];

// used to give unique id to every book
idx = 0;

// constructor for book objects
class Book {
    constructor(title, author, pages, read, description) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.description = description;
        this.id = idx;
        idx++;
    }
}

function addBookToLibrary(title, author, pages, description, read = false) {
    const newBook = new Book(title, author, pages, read, description)
    myLibrary.push(newBook);
    return newBook;
}

// default books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 255, "Children's fantasy novel published in 1937 to wide critical acclaim.");
addBookToLibrary("The Hello Goodbye Window", "Norton Juster", 32, "Published in 2005, the children's picture book book tells the story of a little girl who enjoys visiting her grandparents. Won the 2006 Caldecott Medal.")
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 224, "Fantasy novel and beginning of the Harry Potter series.");

const booksContainer = document.getElementById("books-container");

// given book object, add it to the DOM
function addBookToDom(book) {
    // card that holds book info
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.id = "book" + book.id;

    // grouping of title and author of book
    const titleAuthor = document.createElement("div");
    titleAuthor.classList.add("title-author");

    const titleHeader = document.createElement("h2");
    titleHeader.textContent = book.title;
    titleAuthor.appendChild(titleHeader);

    const authorText = document.createElement("p");
    authorText.textContent = "by " + book.author;
    titleAuthor.appendChild(authorText);
    bookCard.appendChild(titleAuthor);

    // page count
    const pagesElement = document.createElement("p");
    const pageLabel = document.createElement("span");
    pageLabel.textContent = "Page count: ";
    pagesElement.appendChild(pageLabel);
    pagesElement.append(book.pages);
    bookCard.append(pagesElement);

    // description
    const desc = document.createElement("p");
    desc.classList.add("description");
    desc.textContent = book.description;
    bookCard.append(desc);

    // button that toggles book's read status
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

    // button that deletes the book from the library and removes it from the DOM
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

// form within dialog to add books
const addForm = document.getElementById("add-form");

// add error message but hide it initially
const formItems = document.querySelectorAll(".form-item");
formItems.forEach((formItem) => {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "This field is required.";
    formItem.appendChild(errorMessage);

    let input = formItem.querySelector("input");
    if (input == null) {
        input = formItem.querySelector("textarea");
    }
    input.addEventListener("input", () => {
        input.classList.remove("invalid");
    })
});

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
        // get data from form
        const title = addForm.elements["title"].value;
        const author = addForm.elements["author"].value;
        const pages = addForm.elements["pages"].value;
        const description = addForm.elements["description"].value;
        const read = addForm.elements["read"].checked;

        // clear form fields
        addForm.elements["title"].value = "";
        addForm.elements["author"].value = "";
        addForm.elements["pages"].value = "";
        addForm.elements["description"].value = "";
        addForm.elements["read"].checked = false;

        const newBook = addBookToLibrary(title, author, pages, description, read);
        addBookToDom(newBook);
        hideDialog();
    } 
});

// called when submit button pressed
// check all forms and apply errors
function validateForm() {
    let valid = true;
    formItems.forEach((formItem) => {
        let input = formItem.querySelector("input");
        if (input == null) {
            input = formItem.querySelector("textarea");
        }
        if (input.value.length == 0) {
            input.classList.add("invalid");
            valid = false;
        }
    });
    return valid;
}