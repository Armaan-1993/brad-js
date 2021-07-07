//this the user which sends different requests to the server
const http = new easyHTTP();

// http.get(`http://jsonplaceholder.typicode.com/posts`, function (err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// http.get(`http://jsonplaceholder.typicode.com/posts/1`, function (
//     err,
//     response
// ) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

//creating data

const data = {
    title: "this my data",
    body: "this is the final data",
};

//create Post

// http.post(`http://jsonplaceholder.typicode.com/posts`, data, function (
//     err,
//     response
// ) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

//Using PUT request (update a post)

http.put("http://jsonplaceholder.typicode.com/posts/67", data, function (
    err,
    response
) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

//Usin delete request

http.delete("http://jsonplaceholder.typicode.com/posts/1", data, function (
    err,
    response
) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
