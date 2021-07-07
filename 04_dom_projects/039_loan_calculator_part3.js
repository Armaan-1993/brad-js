//Create event listeners for the form tag. Here , also use an e.preventDefault()

document.getElementById("loan-form").addEventListener("submit", function (e) {
    //Hide result
    document.getElementById("results").style.display = "none";

    //Show Loader
    document.getElementById("loading").style.display = "block";

    setTimeout(calculateResults, 1000);

    e.preventDefault();
});

function calculateResults() {
    console.log("calculating..");

    //UI Variables
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //To calculate the monthly payment

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        //is finite is used to check if a number is finite or not
        monthlyPayment.value = monthly.toFixed(2); //toFixed() is used to display the amount with the number of decimal places  as given in the brackets
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (
            monthly * calculatedPayments -
            principal
        ).toFixed(2);

        //Show result
        document.getElementById("results").style.display = "block";

        //Hide loader
        document.getElementById("loading").style.display = "none";
    } else {
        showError("Please Check Your Numbers!");
    }
}

function showError(error) {
    //Hide result
    document.getElementById("results").style.display = "none";

    //Hide Loader
    document.getElementById("loading").style.display = "none";

    //craete a div
    const errorDiv = document.createElement("div");

    //get elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    //add class
    errorDiv.className = "alert alert-danger";

    //create text node
    errorDiv.appendChild(document.createTextNode(error));

    //to insert an element (that is , error) in a div on top of another element inside the
    //div , we use .insertBefore()
    card.insertBefore(errorDiv, heading);

    //In order to clear the error , we use selfTimeOut();

    setTimeout(clearError, 3000); //setTimeout() runs the function clearError in 3000 milliseconds after the error div has been displayed
}

function clearError() {
    document.querySelector(".alert").remove();
}
