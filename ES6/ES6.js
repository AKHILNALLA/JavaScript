// // ES 5

// var name5 = 'akhil';
// console.log(name5);
// name5 = 'akhil Reddy';
// console.log(name5);

// // ES 6

// const name6 = 'akhil';
// console.log(name6);
// // name6 = 'Akhil Reddy;';  // Uncaught TypeError: Assignment to constant variable.

// // console.log(name6);
// let lname6 = ' aki ';
// console.log(lname6);
// lname6 = 'aa';
// console.log(lname6);
// // let allow to change the value and const will remain fix & constant



// var i = 23;
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);
// output --> 0 1 2 3 4 5


//  const i = 23;
// for (const i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);
// o/p --> ES6.js:29 Uncaught TypeError: Assignment to constant variable.
//  at ES6.js:29

//  let i = 23;
//  for (let i = 0; i < 5; i++) {
//       console.log(i);
//   }
//    console.log(i);
// 0 1 2 3 4 23

// console.log(aa)
// let aa ='a';
// ES6.js:46 Uncaught ReferenceError: Cannot access 'aa' before initialization
//     at ES6.js:46

// blocks and iife's


// ES5 

//  (function(){

//   var c= 6;
//  })();
//  console.log(c); // c is not defined

//ES 6
// {
//   let a = 1;
//   const b = 2;
// }
// console(a+b); // not defined


/////////////////////////////////
// Lecture: Strings


let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// function calcAge(year) {
//     return 2016 - year;
// }
// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// console.log(`this is ${firstName}. born in ${yearOfBirth}`)
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j')); // false
// console.log(n.endsWith('Sm')); // f
// console.log(n.includes('oh')); // t
// console.log(`${firstName} `.repeat(5));



//-----------------------------------
// Arrow functions  =>
// const year = [1990,1965,1982,1937,1997];

// //ES 5
// var ages5 = year.map(function(element){ 
//   return 2013- element;
// });
// console.log(ages5);

// //ES6
// // 1st way to use map with single element
//  let ages6 = year.map(el => 2016-el );
//  console.log(ages6);
// // 2nd way to use map with 2 element
// ages6 = year.map((element,index) => `${index+1} is ${element}`);
// console.log(ages6);
// // 3rd way to use with return statement
// ages6 = year.map((el,index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `the age ${age} for index ${index+1}`;
// });
// console.log(ages6)


// ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() { 

//      var self = this; 
//      document.querySelector('.green').addEventListener('click', function() {
//           var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//           alert(str);
//       });
//   }
// }
// box5.clickMe();

//ES6
// var box6 ={
// color:'blue',
// position: 2,
// clickMe: function(){

//   document.querySelector('.blue').addEventListener('click',() => {
//     var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//     alert(str);
//   });
// }
// };
// box6.clickMe();

// var box66 ={
//   color:'blue',
//   position: 2,
//   clickMe: () => {

//     document.querySelector('.blue').addEventListener('click',() => { 
//       var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     });
//   }
//   };
//   box66.clickMe();

//ES5

// function person(name){
//   this.name = name;
// }

// person.prototype.friends5 = function(friend){

//   var arr = friend.map(function(el) {
//     return this.name + ' is friend of ' + el;
//   }.bind(this));
//   console.log(arr);
// }

// var friend = ['A' , 'B' , 'C'];
// new person('Akhil').friends5(friend);

//ES6

// person.prototype.friend6 = function(friend){

//   var arr = friend.map(el => `${this.name} is friend of ${el}`);
//   console.log(arr)
// }
// new person('Akhil').friend6(friend);

// Lecture: Destructuring
// var john = ['john', 26];
// var name = john[0];
// var age = john[1];
// console.log(name);
// console.log(age);

// const [name, age] = ['john',26];
// console.log(name);
// console.log(age);

// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// };
// const {firstName , lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);

// function calcret(year){
//   var age = new Date().getFullYear() - year;
//   console.log(new Date().getFullYear())
//   console.log(year)
//   return[age, 65-age];
// }

// const[age2 , retriement ] = calcret(1997);
// console.log(age2);
// console.log(retriement);

/////////////////////////////////
// Lecture: Arrays


// var array = [1,2,3,4,5,6];
// console.log(`original array ${array}`) // 123456
// console.log("splice array",array.splice(2,1)); // 3
// console.log(" array after splice",...array) // 12456

// var array = [1,2,3,4,5,6];
// console.log(`original array ${array}`);//123456
// console.log("splice array",array.slice(2));//3456
// console.log(" array after splice",...array)//123456


// const boxes = document.querySelectorAll('.box');
// console.log(boxes);

// var boxesArr5 = Array.prototype.slice.call(boxes);
// console.log(Array.prototype.slice.call(boxes));

// boxesArr5.forEach(element => {
//   element.style.backgroundColor = 'dodgerblue';
// });

// const boxesArr6 = Array.from(boxes)
// console.log('box6',boxesArr6);

// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// //ES5
// for(var i = 0; i < boxesArr5.length; i++) {
//   if(boxesArr5[i].className === 'box blue') {
//       continue;
//   }
//   boxesArr5[i].textContent = 'I changed to blue!';
// }
// //ES6
// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue')) {
//       continue;
//   }
//   cur.textContent = 'I changed to blue!';
// }

// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function(element){
//   return element >= 18;
// })
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// //es6
// console.log(ages.findIndex((cur) => cur >= 18 ));
// console.log(ages.find((cur) => cur >= 18 ));


/////////////////////////////////
// Lecture: Spread operator


// function addFourAges (a, b, c, d) {
//     return a + b + c + d;
// }
// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);
// //ES5
// var ages = [18, 30, 12, 21];

// var sum5 = addFourAges.apply(null,ages);
// console.log(sum5);
// //ES6

// var sum6 = addFourAges(...ages);
// console.log(sum6);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// console.log(h)
// const boxes = document.querySelectorAll('.box');
// console.log(boxes);
// const all = [h, ...boxes];
// console.log(all);

/////////////////////////////////
// Lecture: Rest parameters

// function isFullAge5() {
//     arr = Array.prototype.slice.call(arguments);

//     arr.forEach(function (el) {
//         console.log((2016 - el) >= 18);
//     });
// }

// isFullAge5(1990, 1999, 1965, 2016, 1987);

// function isFullAge6(...year) {
//     year.forEach(el => console.log((2016 - el) >= 18));
// }

// isFullAge6(1990, 1999, 1965, 2016, 1987);

// function isFullAge5(limit) {
//     arr = Array.prototype.slice.call(arguments,1);

//     arr.forEach(function (el) {
//         console.log((2016 - el) >= limit);
//     });
// }

// isFullAge5(18,1990, 1999, 1965, 2016, 1987);

// function isFullAge6(limit,...year) {
//     year.forEach(el => console.log((2016 - el) >= limit));
// }

// isFullAge6(18,1990, 1999, 1965, 2016, 1987);

/////////////////////////////////
// Lecture: Default parameters

//ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'american' : nationality = nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('akhil',1997);
// //ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Nalla', nationality = 'IND') {



//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var Arun = new SmithPerson('Arun',1999);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

/////////////////////////////////
// Lecture: Maps

// const question = new Map();
// question.set('question','what is ur age?');
// question.set(1,'18');
// question.set(2,'28');
// question.set(3,'38');
// question.set(4,'23');
// question.set('correct',4);
// question.set(true,'correct answer');
// question.set(false,'incorrect answer');
// console.log(question.get('question'));

// //question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// for(let [key, value] of question.entries()){
//     if(typeof(key) === 'number'){
//         console.log(`Answer ${key} : ${value}`);
//     }
// }

// var ans = parseInt(prompt(question.get('question')));

// console.log(question.get(ans === question.get('correct')));

/////////////////////////////////
// Lecture: Classes

/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');
//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}
const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting();
*/

/////////////////////////////////
// Lecture: Classes and subclasses

/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}
const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/














