const http = new EasyHttp();

//get users

// http.get(`http://jsonplaceholder.typicode.com/users`)
//     .then((data) => console.log(data))
//     .then((err) => console.log(err));

//User Data

const data = {
    name: "Armaan",
    place: "Kozhencherry",
    district: "Pathanamthitta",
    age: 26,
    email: "armaanmathew88@gmail.com",
};

//post request: to craete a user

// http.post(`http://jsonplaceholder.typicode.com/users`, data)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//put request: to update the credentials of a user

// http.put(`http://jsonplaceholder.typicode.com/users/2`, data)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

http.delete(`http://jsonplaceholder.typicode.com/users/2`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
