class Person {
    //this is how you define a class
    constructor(firstName, lastName, dob) {
        //a constructor is defined inside the class
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        //you can define a method just like that in a class.A method defined can be accessed outside the constructor by the same way. Also , a methos defined inside the cosntructor will behave as the prototype and not a property
        return `The full name is ${this.firstName} ${this.lastName}`; //this is the basic syntax of instantiation
    }

    calculateAge() {
        let diff = Date.now() - this.birthday.getTime();
        console.log(`diff is ${diff}`);
        let ageDate = new Date(diff);
        console.log(`agedate is ${ageDate}`);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
        // console.log(ageDate.getUTCFullYear());
    }

    getMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        //this is a static method , unlike the dynamic methods made form instantiaton. This cannot be used along with the varibale. In order to use it , we need to use it with the class name.
        return x + y;
    }
}

const armaan = new Person("Armaan", "Mathew", "23 October 1993");
console.log(armaan);
console.log(armaan.greeting());
console.log(armaan.calculateAge());
armaan.getMarried("Smith");
console.log(armaan);

// console.log(armaan.addNumbers(1, 2));
console.log(Person.addNumbers(1, 3)); //this is how you use a static method. You wont need to use a this.anything inside its body.
