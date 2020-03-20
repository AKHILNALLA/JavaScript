var names = ['arun','akhil','mom'];
var years = new Array(1999,'1997',1980,true,'')

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


console.log(names.indexOf('mom'));
console.log(years);
console.log(typeof years[3])

var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue'); // add element at last 
john.unshift('Mr.'); // add element at first 
john.pop(); // remove last element
john.shift(); // remove first element
console.log(john.indexOf('Smith'));
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


console.log(john);

