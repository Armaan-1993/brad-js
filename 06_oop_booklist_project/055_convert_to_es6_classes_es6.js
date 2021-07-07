class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
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
    }

    showAlert(message, className) {
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
    }

    deleteBook(target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}

//Event listener for add book (submit data)

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

//event listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
    //Instantiate UI

    const ui = new UI();

    //Delete book

    ui.deleteBook(e.target);

    //show message

    ui.showAlert("Book Deleted!", "success");
    // console.log(123);
    e.preventDefault();
});
