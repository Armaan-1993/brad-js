//this the user which sends different requests to the server
const http = new easyHTTP();

http.get(`http://jsonplaceholder.typicode.com/posts1`, function (
    err,
    response
) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
