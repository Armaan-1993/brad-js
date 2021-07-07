//You need to instantiate the class "GitHub" in order to use its data in this file

const github = new GitHub();
const ui = new UI();
//Search Input
const searchUser = document.getElementById("searchUser");

//Search Input Event Listener
searchUser.addEventListener("keyup", (e) => {
    userText = e.target.value;
    if (userText !== "") {
        github.getUser(userText).then((data) => {
            //the return will be in the form of a promise . Hence , we need to use .then to get its value. This is becuase we are using async and await and it returns a promise.
            //console.log(data);
            if (data.profile.message === "Not Found") {
                //show alert (need to return it from the ui file)
                ui.showAlert("User not found", "alert alert-danger");
            } else {
                //show profile - also need to return it from the ui file
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        // need to clear the profile. Need to return it from ui file
        ui.clearProfile();
    }
});
