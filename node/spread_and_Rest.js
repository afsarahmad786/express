// Spread operator creates copy
const hobbies = ["apple", "lemon"];

const copyarr = [...hobbies];
console.log(copyarr);

// creates a copy of the existing object that's y diffrent objects
// const obj1 = { key1: 1 };
// const obj2 = { ...obj1 };

// if (obj2 === obj1) {
//   console.log("same objects");
// } else {
//   console.log("different objects");
// }

const Student = {
  name: "Afsar",
  age: 25,
  name1() {
    console.log("Hi " + this.name);
  },
  age1() {
    console.log("Age is  " + this.age);
  },
  nameage() {
    console.log("Hi " + this.name + " Your age is " + this.age);
  },
};

const copyobj = { ...Student };
console.log(copyobj);

// Rest operator is refrenced type so t make changes in the current object
const obj1 = { key1: 1, key2: 2 };

const obj2 = { ...obj1, key1: 1000 };

console.log(obj1);

console.log(obj2);

const arr = (...args) => {
  return args;
};

console.log(arr(1, 2, 3, 4, 5, 6, 4));
