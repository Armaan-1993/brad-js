//Javascript library using Async and Fetch

class EasyHttp {
    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    //post request (to create a user with the given details in the data object)

    async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        });
        const myResponse = await response.json();
        return myResponse;
    }

    //put request - to update the credentials of a user

    async put(url, data) {
        const response = await fetch(url, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        });
        const myResponse = await response.json();
        return myResponse;
    }

    //delete request: to delete a user

    async delete(url) {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        });
        const myResponse = await "The user has been deleted";
        return myResponse;
    }
}
