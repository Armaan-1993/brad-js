// let name = "Philip";
// const switchFunction = () => {
//   switch (name) {
//     case "Armaan":
//       console.log(`The ${name} is Armaan`);
//       break;
//     case "Philip":
//       console.log(`The ${name} is not Armaan`);
//       break;
//     case "Mathew":
//       console.log(`The ${name} is not Armaan`);
//       break;
//   }
// };
// switchFunction();

let name = "sscs";
const switchFunction = () => {
  switch (name) {
    case "Armaan":
      console.log(`The ${name} is Armaan`);
      break;
    case "Philip":
      console.log(`The ${name} is not Armaan`);
      break;
    default:
      console.log(`The ${name} is not Armaan`);
      break;
  }
};
switchFunction();

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log(day);
