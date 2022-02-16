let name1="Statcy Student"; 
name2="Teppo Teacher";

var name1="Statcy Student"; 
name2="Teppo Teacher";

const name3="Meharb"
typeof name3; //"String"

let nuberInstring="123";
typeof nuberInstring;
let numberInString=Number(numberInString);
typeof nuberInstring;

let answer="5"+12;
console.log(answer); //"512"

let name4="Rahman";
let output=`${name4}! 1+1 is ${1+1}`

let thisIsNumber = 1234;
let thisIsAlsoNumber = 1.2345

let truth = true;
let lie = false;

let variable = null;
typeof variable; // 'object'


function sayHello(name) {
    return `Hello ${name}!`;
};
typeof sayHello; // 'function'
sayHello("Teppo"); // Hello Teppo!


Boolean(false) // false
Boolean(true) // true
Boolean(1) // true
Boolean(0) // false
Boolean(NaN) // false
Boolean(undefined) // false
Boolean(null) // false
Boolean(new Object) // true
Boolean("Hello") // true
Boolean("") // false

Boolean(true == true) // true
Boolean(false == false) // true
Boolean(1 == true) // true
Boolean(0 == false) // true

Boolean("Hello" == true); // false
Boolean("Hello"); // true

Boolean(NaN == false) // false
Boolean(undefined == false) // false
Boolean(null == false) // false

Boolean("Hello" == true) // Original claim, false
// Now let's see what happens when we follow the rules
Boolean("Hello" == Number(true)) // Apply rule 9
Boolean(Number("Hello") == 1) // Apply rule 5
Boolean(NaN === 1) // Apply rule 1
// NaN is not 1 -> false

Boolean(NaN == false) // Original claim, false
// Now, applying rules
Boolean(NaN == Number(false)) // Rule 9
Boolean(NaN === 0) // Rule 1
// NaN is not zero

Boolean(0 === false) // false as with ==
Boolean(1 === true)  // false because 1 and true are different types (number and a boolean)


//Control Structures
 
//-If - Else"

if (condition);
    // then do this
else if (condition2);
    // if the first condition did not match, but this did, do this
else;
    // if no condition matched, do this

 if (condition) {
    // then do this
    // multiline
} else if (condition2) {
    // if the first condition did not match,
    // but the second did, do this
} else {
    // if no condition matched
    // do this
}

//-Ternary operator (“The question mark”)

let studentAmount = 2;
let unit;
if (studentAmount === 1) {
    unit = "student";
} else {
    unit = "students";
}

console.log(`${studentAmount} ${unit}`);

//-The generic form is:
let variable = condition ? valueIfTrue : valueIfFalse

//Switch

switch (expression) {
    case value1:
      //Statements executed when the
      //result of expression matches value1
      [break;]
    case value2:
      //Statements executed when the
      //result of expression matches value2
      [break;]
    case valueN:
      //Statements executed when the
      //result of expression matches valueN
      [break;]
    [default:
      //Statements executed when none of
      //the values match the value of the expression
      [break;]]
  }

  //Loops
   //-1 While

   while (condition) {
    // Code to-be-repeated here
    // This is called "loop body"
  }

  do {
    // loop body
  } while (condition);
  
  //-1 For

  for (let i=0; i<5; i++){
      console.log(i)
  }
 //In general
  for (initialization; condition; advancement) {
    // loop body
}

//Functions
Math.sqrt(2);
let square=Math.sqrt(2);
console.log(square);

let randomValue = Math.random();
let randomFunction = Math.random;
randomFunction(); // Returns a random value
console.log(Math.random);

//Function declarations
function theNameOfFunction(parameter1, parameter2, ...) {
    return theReturnValue;
}
/*
In JavaScript, primitive values are passed by value and objects are passed by reference.
Passing the value to the function means that if the function modifies the value of the parameter, the change 
is not reflected globally or in the calling function. 
*/

let value = 12;


function multiplyWithTwo(x) {
    x = x * 2;
}

multiplyWithTwo(value);
console.log(value); // still 12


let v=2;
function mul(x){
    x=x*2;
}
mul(v);
console.log(v);



let numberArray = [12];

function multiplyWithTwo(arr) {
    arr[0] = arr[0] * 2;
}

multiplyWithTwo(numberArray);
console.log(numberArray); // [24]



function draw(){
    background(50);

}
 draw()


 function lol(x, y, dia){
     fill(0, 200, 255);
     rect(x-10, y, 20, 150);
     fill(255, 0, 200);
     ellipse(x, y, dia, dia);

 }

 // Function expressions
 const theNameOfVariable = function(parameter1, parameter2, ...) {
    // Statements here
    return theReturnValue;
}

const theNameOfVariable = function theNameOfFunction(parameter1, parameter2, ...) {
    // Statements here
    return theReturnValue;
}

console.log(function(parameter1, parameter2) {
    // Statements here
});

console.log(function(a, b) {
    return a+b;
});

//Arrow functions

const addtogether=(parameter1, parameter2) => {
    return a+b;
}

const addTogether = (a, b) => {
    return a+b;
}

const addTogether = (a, b) => a+b;
const addTogether = a =>a+100;
const sayHello = () => console.log("Hello World");
console.log ((a, b) => a+b);

//Scopes

let gloVar="Hello world";
function sayHello() {
    console.log(gloVar);
}
sayHello();


function saveVariable() {
    let fLocalVar = "Hello world";
}
saveVariable();
console.log(fLocalVar); // ReferenceError



function blockExample() {
    let fLocalVar = "Hello from function scope";
    // Create a block. This could be an if block or a loop block as well
    {
        let bLocalVar = "Hello from the block";
        console.log(bLocalVar); // Prints "Hello from the block"
        console.log(fLocalVar) // Prints "Hello from function scope"
    }

    console.log(bLocalVar); // ReferenceError
}

blockExample();



function blockExample() {
    let fLocalVar = "Hello from function scope";
    // Create a block. This could be an if block or a loop block as well
    {
        var bLocalVar = "Hello from the block";
        console.log(bLocalVar); // Prints "Hello from the block"
        console.log(fLocalVar) // Prints "Hello from function scope"
    }

    console.log(bLocalVar); // Prints "Hello from the block"
}

blockExample();


function saveVariable() {
    var fLocalVar = "Hello world";
}

console.log(fLocalVar); // ReferenceError


//Closures and Nested functions
function outerFunction() {
    let outerVariable = "Hello from outer";

    return function() {
        return "Hello from inner" + outerVariable;
    }

}

// The outerFunction returns a function that will be assigned to innerFunction
let innerFunction = outerFunction();

// Inner function references to "outerVariable"
// but does outerVariable still exist at the time
// innerFunction is called?
innerFunction();



//Object literals and arrays¶

const person={
    firstName: "Mehrab",
    lastName: "Hossain",
    age: 30,
    introduction:function () {
        return `My Name is ${this.firstName} ${this.lastName} and my age is ${this.age}`
    }

}
//console.log(person);

//person.firstName; // "Stacy"
person.introduction;


//Arrays
let amptyArray=[];
let arrayWithContents=["Strings", "Indide", "an array"];

console.log(arrayWithContents[0]);

//Iterating over arrays
for (let i=0; i<arrayWithContents.length; i++){
    console.log(arrayWithConte[i])
}

//for…in
for (let idx in arrayWithContents) {
    console.log(arrayWithContents[idx]);
}

//for…of
for (let val of arrayWithContents) {
    console.log(val);
}

/* Higher-order functions and arrays: Higher-order functions mean functions that can take other 
functions as their parameters. But what does higher-order functions and arrays have to do with each other? 
Let us make an example by using a method called forEach: */

arrayWithContents.forEach(val => console.log(val))
arrayWithContents.forEach((val, idx) => console.log(String(idx) + val))
let item  = "an";
let filteredArray = arrayWithContents.filter(val => val !== item);

let contacts = [
    {
        name: "Teppo",
        number: "040012345678"
    },
    {
        name: "Pirkko",
        number: "055987654321"
    },
    {
        name: "Stacy",
        number: "0446543210987"
    }
]

let numbers = contacts.map(contact => contact.number);

let grades = [5,5,2,4,5,3]
let sum = grades.reduce((acc, val) => acc+val);


/*Objects and function context*/

//-Function Context

//Function and method invocations

const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
    }

}
person.introduction(); // "Hello, my name is Stacy Student and my phone number is 0400123456789!"

const noContextIntroduction = person.introduction;
noContextIntroduction();
const secondPerson = {
    firstName: "Teppo",
    lastName: "Teacher",
    tel: "050987654321"
}

secondPerson.introduction = person.introduction;
secondPerson.introduction();

//Indirect invocation and binding-পরোক্ষ আহ্বান এবং বাঁধাই

const name12=person.function;
name12();
 name12.apply();
 name12.call();

let boundIntro=person.function.bind();
boundIntro();

//Inner functions and arrow functions

const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: function() {

        function createIntroduction() {
            return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
        }

        return createIntroduction();
    }
}
person.introduction(); // "Hello, my name is undefined undefined and my phone number is undefined!"


const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: function() {

        function createIntroduction() {
            return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
        }
        // Providing context upon calling
        return createIntroduction.call(this);
    }
}
person.introduction(); // "Hello, my name is Stacy Student and my phone number is 0400123456789!"



const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: function() {
        const createIntroduction = function() {
            return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
        }.bind(this); // *this* inside the createIntroduction is now bound to the *this* of the outer function

        return createIntroduction();
    }
}
person.introduction(); // "Hello, my name is Stacy Student and my phone number is 0400123456789!"


const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: function() {
        const createIntroduction = () => {
            return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
        } // *this* inside createIntroduction is now bound to outer function's *this* because of arrow function
        return createIntroduction();
    }
}


/*Common pitfalls*/

//Giving a method as a parameter
setInterval(() => console.log("hello world"), 5000);

const person = {
    firstName = "Mehrab",
    lastName = "Hossain",
    age = 32,
    tel = "0465715218",

    introduction: () => {
        console.log(`My name is ${this.firstName} ${this.lastName} and age is ${this.age}!`);
    }
    
    //Or we can use the below one.

    /*introduction: function () {
        return `My name is ${this.firstName} ${this.lastName} and age is ${this.age}!`;
    } */

}
setInterval(person.introduction, 5000);

//Basically what will happen inside setInterval is (roughly) the following:
let callback = person.introduction;

// for every *interval* seconds, call callback:
callback(); // No more context

//To fix the context, the function needs to be either bound to the object:
setInterval(person.introduction.bind(person), 5000 );

//or the given function itself can call the method with context:
setInterval(() => person.introduction(), 5000 );
//Basically in the example above we give setInterval a function, that will call the actual method. This way we will not lose the context!


//This in inner functions
const person = {
    firstName: "Mehrab",
    lastName: "Hossain",
    tel: "0465715218",

    introduction = function () {
         function innerfunction (){
             return`My name is ${this.firstName} ${this.lastName} and phonne number is ${this.tel}!`
         }
         return innerfunction();
    }
}
person.introduction();

//Lexical context in arrow functions
/*Some developers prefer to always use arrow functions for their compact look and general appearance. 
The arrow functions are not completely interchangeable with the normal functions though, 
and using them in place of normal functions can have bad consequences. As previously discussed, arrow functions do not create their own execution context but are bound to this from the outer functions. 
This is a problem if methods are defined using arrow functions:*/

const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: () => {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`);
    }
}

person.introduction();
// "Hello, my name is undefined undefined and my phone number is undefined!"


//Intuitively one could think that the code above should work, as the function is defined inside an object. But remember that the code above is equal to the following:
const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`);
    }.bind(this)
}
person.introduction(); // "Hello, my name is undefined undefined and my phone number is undefined!"



/* 
Objects: When coming from other OO programming languages, this might seem a little bit off as the languages 
usually have “object templates” i.e. classes that define the object structure but no values. The objects are
created by creating a new instance out of the class and filling out the property fields using a constructor. 

But worry no more, there are a couple of ways to define “classes” in JavaScript: The little bit older 
(but still valid) way of creating constructor functions and a little bit newer “class syntax”. The word 
class is typed in quotes since JavaScript is a prototype based language and does not really provide a class 
implementation. Even the class syntax is only “syntactic sugar” on top of the prototyped language. More about
this later.
*/

//Constructor (আহ্বান) functions
function creatPersonName (firstName, lastName, tel){
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.tel = tel;

    person.introduction = function () {
        return `My name is ${this.firstName} ${this.lastName} and phone number is ${this.tel}!`
    }
    return person;
}
 let stacy = creatPersonName("stacy", "student", "0500456");

// or create below one

function Person (firstName, lastName, tel){
    this.firstName = firstName;
    this.lastName = lastName;
    this.tel = tel;

    this.introduction = function () {
        return `My name is ${this.firstName} ${this.lastName} and phone number is ${this.tel}!`
    }
    return person;
}
 let stacy1 = new Person("stacy1", "student", "0500456");
 let stacy2 = new Person("stacy2", "teacher", "0500478");
 
 stacy1.introduction();
 stacy2.introduction();


 //Constructor invocations and context
//Class syntax
class Person {
    constructor(firstName, lastName, tel) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.tel = tel;
    }
    introduction (){
        return `My name is ${this.firstName} ${this.lastName} and phone number is ${this.tel}!` 
    }
}

const stacy3 = new Person ("stacy1", "student", "0500456");
const meher = new Person ("Mehrab", "Student", "0465715218");
stacy3.introduction()
meher.introduction()



/* 2.9
Inheritance and prototypes (উত্তরাধিকার এবং প্রোটোটাইপ)
*/

let exampleObject = {};
console.log(exampleObject.__proto__);

/* 
The property will return an object with multiple methods, including but not limited to the following:
constructor: function Object()
hasOwnProperty: function hasOwnProperty()
isPrototypeOf: function isPrototypeOf()
propertyIsEnumerable: function propertyIsEnumerable()
toLocaleString: function toLocaleString()
toString: function toString()
valueOf: function valueOf()

Our hypothesis is now that exampleObject inherits all the methods from Object.prototype. In other words, 
for the hypothesis to be true, exampleObject.__proto__ === Object.prototype should be true, and it is. 
This proves that exampleObject inherits methods from Object.prototype.
*/

function Person(firstName, lastName, tel) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tel = tel;

    this.introduction =  function() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
    }

}

// or

function Person(firstName, lastName, tel) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tel = tel;
}

Person.prototype.introduction = function() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
}


//Pitfall (গুপ্ত বিপদ): Constructor functions as prototype objects
function Person(firstName, lastName, tel) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tel = tel;
}

Person.prototype.introduction =  function() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
}


function Student(firstName, lastName, tel, studentNumber) {
    Person.call(this, firstName, lastName, tel);
    this.studentNumber = studentNumber;
    this.grades = [];
}

let stacy = new Student("Stacy", "Student", "0400123456789", "123456");
Student.prototype = Object.create(Person.prototype);


Object.defineProperty(Student.prototype, 'constructor', {
    value: Student,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });

    stacy = new Student("Stacy", "Student", "0400123456789", "123456");
    stacy.introduction(); // Should work now!
    

//Chapter 03 (WWW and Java Script)
//Editing DOM




