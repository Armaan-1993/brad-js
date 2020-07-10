document.getElementById("button").addEventListener("click", loadData);

function loadData() {
    //Create an XHR object
    const xhr = new XMLHttpRequest();

    //OPEN , which is a property that collects data from the text file and it's given as "true" since we want this to be asynchronous

    //HTTP STATUSES:
    // 200 = All okay,
    // 403 = forbidden,
    // 404 = not found

    //READY STATE VALUES:
    //0: request not initialised
    //1: server connection established
    //2: request received
    //3: processing request
    //4: request finished and response is ready

    xhr.open("GET", "059_xhr_working_methods.txt", true);
    // console.log("READY STATE", xhr.readyState); //here the rrady state value is 1.

    //"get is used to get details from the text file"

    xhr.onload = function () {
        // console.log("READY STATE", xhr.readyState);
        if (this.status === 200) {
            // console.log(this.responseText); //this.resposne fetches the text data in the text file
            document.getElementById(
                "output"
            ).innerHTML = `<h1>${this.responseText}</h1>`;
        }
    };

    // xhr.onprogress = function () {
    //     console.log("READY STATE", xhr.readyState); //Here , it shows ready state 3 as it is in progress.
    // };

    // xhr.onreadystatechange = function () {
    //     console.log("READY STATE", xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // };
    xhr.onerror = function () {
        console.log("RequesT Error");
    };

    xhr.send(); //this is required to send data to the server end
}
