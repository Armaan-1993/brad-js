//Javascript library based on Fetches and Promise

//This is the asynchronous method

// class EasyHttp {
//     //Make an HTTP Get request
//     get(url) {
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => console.log(data))
//             .catch((err) => console.log(err));
//     }
// }

//synchronous Method

class EasyHttp {
    // get(url) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url)
    //             .then((res) => res.json())
    //             .then((data) => resolve(data))
    //             .catch((err) => reject(err));
    //     });
    // }

    //post request (to create a user with the given details in the data object)

    // post(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: "POST",
    //             headers: {
    //                 "Content-type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => resolve(data))
    //             .catch((err) => reject(err));
    //     });
    // }

    //put request - to update the credentials of a user

    // put(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => resolve(data))
    //             .catch((err) => reject(err));
    //     });
    // }

    //delete request: to delete a user

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => resolve("User Deleted"))
                .catch((err) => reject(err));
        });
    }
}
