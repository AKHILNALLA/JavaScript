// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };
// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// Person.prototype.calculateAge  = function() { // method is added to function
//     console.log(2016 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'AKI'; // property is added to function

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// object.create()  method

// var personproto = {
//     calculateAge : function(){
//         console.log(2020 - this.dob);
//     }
// };

// var john = object.create(personproto);
// john.name ='akhil';
// john.dob = 1997;
// john.job = 'devloper';

// Lecture: Primitives vs objects

// Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);
// // Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);
// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };
// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }
// change(age, obj);
// console.log(age);
// console.log(obj.city);

// // passing function as argument's::

// console.log("passing function as argument's::")

// var years = [1990, 1965, 1937, 2005, 1998];




// function arrayCalc(arr, func){
//     var arrayResult = [];

//     for(var i = 0; i < arr.length; i++){
//         arrayResult.push(func(arr[i]));
//     }

//     console.log("arrayCalc",arrayResult);
//     return arrayResult;
// }

// var ages = arrayCalc(years, calculateAge); 

// function calculateAge(res){
//     console.log("calculateAge",2020 - res);
//     return 2020 - res;
    
// }

// var fullAges = arrayCalc(ages , isFullAge );

// function isFullAge(res){
//     console.log("isFullAge",res >= 18);
//     return res >= 18;
    
// }

// console.log("fullAge", fullAges);

// var rates = arrayCalc(ages , maxHeartRate);

// function maxHeartRate(res){
//     if(res >= 18 && res <= 81){
//         console.log("maxHeartRate",Math.round(206.9 - (0.67 * res)));
//         return Math.round(206.9 - (0.67 * res));
//     } else {

//         return -1;
//     }

// }

// console.log("rates",rates);

/////////////////////////////
// Lecture: Functions returning functions
// console.log("Functions returning functions");

// function interviewQuestion(job) {
//     console.log("job",job);
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         console.log(job)
//         console.log(name)

//         return function(name) {
//             console.log(name)

//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');

// var designerQuestion = interviewQuestion('designer');

// console.log(teacherQuestion)

// teacherQuestion('John');

// designerQuestion('Mark');
// designerQuestion('Mike');

// console.log(teacherQuestion)

// console.log(designerQuestion);
// interviewQuestion('teacher')('Mark');

// designerQuestion('Mark');
// designerQuestion('Mike');


// console.log(designerQuestion)


/////////////////////////////
// Lecture: IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();
// console.log(score);
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

/////////////////
// Lecture : closure



// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }
// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);
// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);
// //retirement(66)(1990);

// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
// interviewQuestion('teacher')('John');


/////////////////////////////
// Lecture: Bind, call and apply

var akhil = {
    name:'Akhil Reddy',
    age:'26',
    job:'Developer',
    presentation: function(style,timeOfDay ){
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' +
             this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + 
            this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var arun = {
    name:'Arun Reddy',
    age:'32',
    job:'DEV'
}

// call()
akhil.presentation.call(arun,'formal','Mrng');
// apply()
akhil.presentation.apply(arun,['friendly','Nght']);
// bind()
var akhilFriendly = akhil.presentation.bind(akhil,'friendly');
akhilFriendly('1st half');
akhilFriendly('2nd half');

// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}
function isFullAge(limit, el) {
    return el >= limit;
}
var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);


































































































































