class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `How are you ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    //this how you extend a class Person to the subclass Customer
    //this is a subclass
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName); //this function is used to extend the properties and methods of the parent class "Person" to this subclass. Since we are extending them , we do not need to use the inherit functions here
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const customer1 = new Customer(
    "Armaan",
    "Mathew",
    "23 October 1993",
    "premium membership"
);
console.log(customer1);
console.log(customer1.greeting()); //the methods defined in the parent class is available here an we dont need to use inherittance funtions here as we are n0t inheritng . We are just extending the class Person to a sublass Customer.ad

console.log(Customer.getMembershipCost()); //this works for customer class and static methods. However , we cannot use the method with the class Person since we are not extending the class Customer and we are doing the other way round.
