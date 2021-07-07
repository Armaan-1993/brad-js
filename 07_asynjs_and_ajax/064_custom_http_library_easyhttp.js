//this is basically the http library(server here)
function easyHTTP() {
    this.http = new XMLHttpRequest();
} //created constructor for this

//Impementing the GET request
easyHTTP.prototype.get = function (url, callback) {
    this.http.open("GET", url, true);
    let self = this; //using self to intialiase it to the "this" keyword , as the scope of "this" keyword , does not extend to the below function in es5 format. However , if we use arrow functons , it will become possible and you dont need to use this self varible in that case.

    this.http.onload = function () {
        // this.http.onload = () => {
        if (self.http.status === 200) {
            callback(null, self.http.responseText); //Since we cant use return here , we use callback here to get the response text at the user end. Null is for the error , if there will be one
        } else {
            callback(`Error ${self.http.status}`);
        }
    };

    this.http.send();
};
