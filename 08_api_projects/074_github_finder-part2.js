//You need to instantiate the class "GitHub" in order to use its data in this file

const github = new GitHub();
//Search Input
const searchUser = document.getElementById("searchUser");

//Search Input Event Listener
searchUser.addEventListener("keyup", (e) => {
    userInput = e.target.value;
    if (userInput !== "") {
        github.getUser(userInput).then((data) => {
            //the return will be in the form of a promise . Hence , we need to use .then to get its value. This is becuase we are using async and await and it returns a promise.
            //console.log(data);
            if (data.profile.message === "Not Found") {
                //show alert (need to return it from the ui file)
            } else {
                //show profile - also need to return it from the ui file
            }
        });
    } else {
        // need to clear the profile. Need to return it from ui file
    }
});
