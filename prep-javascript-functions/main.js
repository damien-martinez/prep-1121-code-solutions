function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHourToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHourToMinutes(2);
console.log('minutes: ', minutes);

function getGreeting(name) {
  return 'hello ' + name;
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  var add = num1 + num2;
  return add * 5;
}

var product = addAndMultiplyBy5(10, 5);
console.log(product);

function multiplyAndDivideBy5(num1, num2) {

  var mult = num1 * num2;
  return mult / 5;
}

var quotient = multiplyAndDivideBy5(35, 10);
console.log(quotient);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var sub = subtractTwoNumbers(22, 7);
console.log(sub);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var cubeResult = cube(5);
console.log(cubeResult);
