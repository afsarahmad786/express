const person = {
  name: "Afsar",
  age: 25,
  name1() {
    console.log("Hi " + this.name);
  },
  age1() {
    console.log("Age is  " + this.age);
  },
};

const printName = ({ name, age }) => {
  console.log(name, age);
};
printName(person);

const { name, age } = person;
console.log(name, age);
