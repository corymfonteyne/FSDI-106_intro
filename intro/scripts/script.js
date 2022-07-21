console.log("Intro page");

//create a hello function that prints your name on the console
//call the function from the init function

function hello() {
  console.log("Cory Fonteyne");
}
function sayHello(firstName) {
  let lastName = "Fonteyne";
  console.log("Hello, " + firstName + " " + lastName + "!!");
}
function sum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}
function exercise1() {
  //print the numbers from 0 to 20
  //except 7 & 13
  for (let i = 0; i < 21; i++) {
    if (i != 7 && i != 13) {
      console.log(i);
    }
  }

  let name = "";
  //show an error if name is empty
  if (!name) {
    console.error("name is required");
  }
}

function exercise2() {
  //A- print every number in the array
  //B- sum all the  numbers and print the result
  //C-print every negative number
  let numbers = [123, 3, -1, 12, -123, 45, 10, 20, 203, -2, -29, 12, 123];
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(numbers[i]);
    total = total + numbers[i];

    if (number < 0) {
      console.log("Is negative", number);
    }
  }
  //print total
  console.log(total);
}

function init() {
  console.log("Intro page");
  //access any DOM element

  hello();

  let firstName = "Cory";
  sayHello(firstName);

  let res = sum(21, 21); //console log 42
  console.log(res);

  exercise1();
  exercise2();
}

window.onload = init;
