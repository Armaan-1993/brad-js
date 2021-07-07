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

//Show Alert - Create div to shwo an alert if the fields are empty

UI.prototype.showAlert = function (message, className) {
    //craete element
    const div = document.createElement("div");
    //add class to it
    div.className = `alert ${className}`;
    //add text node
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".container");
    //get form
    const form = document.querySelector("#book-form");
    //insert elememt to parent
    container.insertBefore(div, form); //to insert div before form

    //timeout after 3 seconds
    setTimeout(function () {
        document.querySelector(".alert").remove();
    }, 3000);
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

    if (title === "" || author === "" || isbn === "") {
        // alert("dafuq");
        ui.showAlert("Please fill in the fields", "error");
    } else {
        //Add book to list
        ui.addBookToList(book); //what's this

        //show success
        ui.showAlert("Book Added!", "success");

        //clear book
        ui.clearFields();
    }

    // // console.log(ui);

    // //Add book to list
    // ui.addBookToList(book); //what's this

    // //clear book
    // ui.clearFields();

    e.preventDefault();
});
