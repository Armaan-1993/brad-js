//Book constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor

function UI() {}

//Add book to list
UI.prototype.addBookToList = function (book) {
    // console.log(book);
    const list = document.getElementById("book-list"); //create a list vaiable

    //add tr element
    const row = document.createElement("tr");
    // console.log(row);
    row.innerHTML = `<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href = "#" class = "delete">X</a></td>
`;
    list.appendChild(row);
};

//prototype to clear each field (title ,author ,isbn) after adding the value and pressing submit
UI.prototype.clearFields = function () {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
};

document.getElementById("book-form").addEventListener("submit", function (e) {
    // console.log("test");

    //get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    //instantiate book
    const book = new Book(title, author, isbn);
    // console.log(book);

    //instantiate UI
    const ui = new UI();

    // console.log(ui);

    //Add book to list
    ui.addBookToList(book); //what's this

    //clear book
    ui.clearFields();

    e.preventDefault();
});
