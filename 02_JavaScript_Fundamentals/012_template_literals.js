let firstName = "Armaan";
let lastName = "Mathew";
let age = 26;
let work = "Developer";
let sex = "Male";
const hello = () => {
  return "Wddddup??";
};
const difference = () => {
  let diff = 245 - 567;
  return diff;
};

let html = `<ul>
    <li>First name: ${firstName}</li>
    <li>Last name: ${lastName}</li>
    <li>Age: ${age}</li>
    <li>Work: ${work}</li>
    <li>Sex: ${sex}</li>
    <li>${hello()}</li>
    <li>${2 + 5 + 5 * 5 + 6}</li>
    <li>${age < 26 ? "I'm young" : "I'm not too young"}</li>    
    <li>${difference()}</li>
  </ul>`;

html = `<ul>
    <div>${hello()}</div>
    <div>${difference()}</div>
    <div>${firstName}</div>
    <div>${lastName}</div>
  </ul>`;

document.body.innerHTML = html;
