const hobbies = ["apple", "oranges", "", "mango", "", "lemon"];

// const newarr = hobbies.map((hobby) => hobby == "");
// for (let i = 0; i < newarr.length; i++) {
//   if (newarr[i] == true) {
//     hobbies[i] = "Empty String";
//   }
// }
// console.log(hobbies);
function update(hobby) {
  if (hobby == "") {
    return "empty string";
  }
  return hobby;
}
console.log(
  hobbies.map((hobby) => {
    return update(hobby);
  })
);
