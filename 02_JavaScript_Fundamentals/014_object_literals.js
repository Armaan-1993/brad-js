let myDetails = {
  name: "Armaan",
  dob: "23rdOct1993",
  lastName: "Mathew",
  middleName: "Philip",
  address: {
    place: "Kozhencherry",
    district: "Pathanmathitta",
    pin: 689654,
  },
  hobbies: ["developing", "workouts", "jogging"],
  // yearOfBirth: (birthYear = () => {
  //   return 1993 - this.age;
  // }),
  sex: "male",
  monday: new Date(),
  condition: true,
};

let val;
val = myDetails.dob;
val = myDetails.address.pin;
val = myDetails.hobbies[1];
val = myDetails.yearOfBirth;

val = myDetails["hobbies"];
val = myDetails.hobbies[2];
val = myDetails.address.place;
val = myDetails.address["pin"]; //alternative method
val = myDetails.yearOfBirth;

// console.log(val);

let arrayOfObjects = [
  { anime: "one piece", episode: 233 },
  { anime: "naruto", episode: 123 },
];

for (let i = 0; i < arrayOfObjects.length; i++) {
  console.log(arrayOfObjects[i].anime);
}
// console.log(arrayOfObjects[1].anime);
