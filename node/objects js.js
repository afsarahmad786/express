const product = (num1, num2) => num1 * num2;
console.log(product(5, 5));

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

Student.nameage();
