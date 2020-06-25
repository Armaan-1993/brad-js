//Parent

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getGreeting = function () {
    return `hi there ${this.firstName} ${this.lastName}`;
};
const person1 = new Person("Armaan", "Mathew");
console.log(person1.getGreeting());

//Customer

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName); //.call() is used to use another fucntion from a function.
    //this,firstname,lastname are the properties defined in the function and those that need to be inherited.
    this.phone = phone;
    this.membership = membership;
}

//To inherit the prototype methods from the previous constructor  , we use customer.prtoype = object.create(person.prototype);
Customer.prototype = Object.create(Person.prototype);

Customer.prototype.constructor = Customer;

const customer1 = new Customer("Rehaan", "John", "9605145889", "Permanent");

console.log(customer1); //here wr all the properties of "Person"

Customer.prototype.getGreeting = function () {
    return `Hi there ${this.firstName} ${this.lastName} . Welcome to the club`;
};

console.log(customer1.getGreeting()); //this gets an error as we havnt inherited getGreeting() yet
