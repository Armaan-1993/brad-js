//create event listener
document.getElementById("button1").addEventListener("click", loadCustomer);

document.getElementById("button2").addEventListener("click", loadCustomers);

//for a single customer

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "060_working_with_ajax_json.json", true);
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText); //here we get an output of the JSON string. hence we need to parse it to the  object to do operations on them
            const customer = JSON.parse(this.responseText);
            let output = `<ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Place: ${customer.place}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
                        </ul>`;
            document.getElementById("customer").innerHTML = output;
        }
    };

    xhr.send();
}

//for multiple custmers

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "060_working_with_ajax_json1.json", true);
    xhr.onload = function () {
        if (this.status === 200) {
            let customers = JSON.parse(this.responseText);
            let output;
            customers.forEach(function (customer) {
                output += `
                <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Place: ${customer.place}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
                </ul>
                `;
            });
            document.getElementById("customers").innerHTML = output;
        }
    };
    xhr.send();
}
