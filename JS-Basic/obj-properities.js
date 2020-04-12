// object literal's
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    jane:{
        Name: 'Akhil',
        age:23
      }
};
john.sex ="Male";
console.log(john)
console.log(john.firstName)
console.log(john['lastName']); // bracket notation
// datatype mutate
john.job='Developer';
console.log(john['job']);
var x = 'birthYear';
console.log(john[x]);
john['isMarried'] = true;
console.log(john['isMarried']," john status")
console.log("name",john.jane['Name'])

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

// object and methods

var Akhil = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        return 2020 - birthYear;
    }
};
console.log(Akhil.calcAge(1997))

var Akhil = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};
Akhil.calcAge();
console.log(Akhil);
