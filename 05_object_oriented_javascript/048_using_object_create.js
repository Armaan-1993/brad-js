const personPrototype = {
    greeting: function () {
        //here , we havnt givrn firstname and lastname as arguemnts and hence we havnt declared properties using this.firstname = firstname. They are directly givrn to the function and are brought to effect.
        return `Hi there ${this.firstName} ${this.lastName}`;
    },
    getMarried: function (newLastName) {
        this.lastName = newLastName;
    },
};
const armaan = Object.create(personPrototype);
armaan.firstName = "Armaan";
armaan.lastName = "Mathew"; //alternative way to create objects and to use object to create. Here , firstName and LAstname properties are inherirted Object.create(personPrototype) and given value using armaan.firstname and lastname.
console.log(armaan);
// console.log(armaan.greeting());
armaan.getMarried("Philip");
console.log(armaan.greeting());

//alternative way for using object.create

const rehaan = Object.create(personPrototype, {
    firstName: { value: "Rehaan" },
    lastName: { value: "John" },
});
// console.log(rehaan);
// rehaan.getMarried("Rohitha");
console.log(rehaan.greeting());
