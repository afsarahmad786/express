const promise1 = Promise.resolve("a");
const promise2 = "b";
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "c");
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 0, "d");
});
const promise5 = "e";

let promises = async () => {
  let promise = await Promise.all([
    promise1,
    promise2,
    promise3,
    promise4,
    promise5,
  ]);
  console.log(promise);
};
promises();
