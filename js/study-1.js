const value = "24.5px";
let numerical = Number.parseFloat(`24.5px`);
console.log(Number.parseFloat(`24.5px`));
console.log(Number.parseFloat(`20.3vh`));
console.log(Number.parseFloat(`14cm`));
console.log(Number.parseFloat(`Poly16`));

function sayHi() {
  console.log("Hello, this is my first function!");
}
sayHi();

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//   function makeMessage(username) {
// 	console.log(`Hello ${username}`);
// }
// makeMessage("Jacob");

function makeMessage(name, price) {
  console.log(`You picked ${name}, price per item is ${price} credits`);
}
makeMessage("Radar", 6150);
makeMessage("Scanner", 3500);
makeMessage("Reactor", 8000);
makeMessage("Engine", 4070);