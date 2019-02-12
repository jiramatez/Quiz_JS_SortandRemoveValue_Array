/*

var firstName = "Jiramate";
console.log(firstName);

*/

/****

var firstName = 'Jiramate';
var age = 23;

console.log(firstName + ' ' + age);

// Type Connection
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

/// Variable mutation
age = 'twenty three';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

****/

/*** 
 *  Basic Operators
 * 
*/

/*
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now = ageMark;

console.log(yearJohn);
console.log(yearMark);
console.log(now / 2);

/* Logical Operators */
/*
var johnOlder = ageJohn > ageMark
console.log(johnOlder);

// type operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
/** */

/**
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge)
*/

/*
var massMark = 78;
var hightMark = 1.69;

var massJohn = 92;
var hightJohn = 1.95;

var BMIMark = massMark / (hightMark * hightMark);
var BMIJohn = massJohn / (hightJohn * hightJohn);
console.log(BMIMark, BMIJohn);

var markHighterBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? '+ markHighterBMI);

if (BMIMark > BMIJohn) {
    console.log('Mark BMI is Higher than John'); 
} else {
    console.log('John is Higher than Mark');
}

/*********  IF ELSE ***********/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus == 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = false;
if  (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hope fully marry soon :)');
}
*/

/* 
var firstName = 'John';
var age = 22;

if (age <13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13  && age <20) {
    console.log(firstName + ' is a teenager')
} else if (age > 20 && age <30) {
    console.log(firstName + ' is a young man.')
}else {
    console.log(firstName + ' is a man');
}
*/

/*
var firstName = 'John';
var age = 16; 

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

/* Switch statement
var job = 'driver';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful website.');
        break;
    default:
        console.log(firstName + ' something else');
}

age = 35;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a younger man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

// Falsy values: undefined, null, 0, '', NAN

 /*
var hight;

hight = 23;

if (hight || hight === 0) {
    console.log('Variable is define');
} else {
    console.log('Variable has NOT beed definde');
}

// Equlity operator
if (hight == '23') {
    console.log('The == operator does type conrection!');
}
*/

/** 
var scoreJohn = (89 + 120 + 103) / 3 ;
var scoreMike = (116 + 94 + 123) / 3 ;
var scoreMary = (97 + 134 + 105) / 3 ;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreMary > scoreMary) {
    console.log('John\'s team wins with' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMike > scoreMike) {
    console.log('Mary\'s team wins with' + scoreMary + ' points');
} else {
    console.log('There is a drawn');
}


/*
if (scoreJohn > scoreMike) {
    console.log('John is Winner with ' + scoreJohn + 'points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike is Winner with ' + scoreMike + ' points');
} else {
    console.log('This is a draw')
}
*/

/* 
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);



function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retire in ' + retirement + ' years.');
}

yearsUntilRetirement(1990, 'John');

/********* TEST FUnction 

function calTax(pricetax)
{
    return pricetax;
}

function calCulateTax(sumPrice, customerName) 
{
    var pCal = calTax(sumPrice);
    var pricePlus = 70 + pCal;
    console.log(customerName + ' Your tax is ' + pricePlus + ' Baht.');
}

calCulateTax(100, 'Jiramate');
    
*/

/* Function Expression
 var whatDoYouDo = function(job, fisrtName) {
     switch(job) {
        case 'teacher':
            return fisrtName + ' Teach kid how to coding';
        case 'driver':
            return fisrtName + ' Teach how to drive';
        case 'designer':
            return fisrtName + ' Teach how to design UI';
        default:
            return fisrtName + ' Not do shit anything';
     }
 }

 console.log(whatDoYouDo('teacher', 'Tim'));
 console.log(whatDoYouDo('driver', 'Job'));
 console.log(whatDoYouDo('police', 'Ivy'));

 */

 /* Array 
 var john = ['John', 'Smith', 1995, 'teacher', false];

 john.push('blue'); // Push < Insert value to last array
 john.unshift('Mr.') // Unshift < Insert vakue before first
 console.log(john);

 john.pop(); // Pop < Delete last array
 john.pop();
 john.shift();
 console.log(john);
 console.log(john.indexOf(1995));
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1995',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
*/

/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bill = [124, 48, 268];
var tips = [tipCalculator(bill[0]),
            tipCalculator(bill[1]),
            tipCalculator(bill[2])];

var finalValue = [bill[0] + tips[0],
                bill[1] + tips[1],
                bill[2] + tips[2],]

console.log(tips, finalValue);

var moss = new Object();
moss.firstName = 'Jiramate';
moss['lastName'] = 'Yodnoo';
moss.birthYear = '1995';

console.log(moss);

*/

/** Object and Metod 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1995',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);



var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 79,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
*/
/***** Loop and iteration ******

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++

var john = ['John', 'Smith', 1990, 'Designer', false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

*/

/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalvalues = [];

        for (var i = 0; i < this.bills.length; i++) 
        {
            // Determine percentage based on tipping rules
            var percentage;
            var bills = this.bills[i];
            if (bills < 50) {
                percentage = .2;
            } else if (bills >= 50 && bills < 200) {
                percentage = .15;
            } else {
                percentage = .1; 
            }
            // Add result to the corresponing arrays
            this.tips[i] = bills * percentage;
            this.finalvalues[i] = bills + bills * percentage;
        }
    }
}

/* Mark 

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalvalues = [];

        for (var i = 0; i < this.bills.length; i++) 
        {
            // Determine percentage based on tipping rules
            var percentage;
            var bills = this.bills[i];
            if (bills < 100) {
                percentage = .2;
            } else if (bills >= 100 && bills < 300) {
                percentage = .1;
            } else {
                percentage = .25; 
            }
            // Add result to the corresponing arrays
            this.tips[i] = bills * percentage;
            this.finalvalues[i] = bills + bills * percentage;
        }
    }
}

function calcaAvg(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do Calculations
john.calcTips();
mark.calcTips();

john.average = calcaAvg(john.tips);
mark.average = calcaAvg(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + ' family pays higher tips, with avg of ' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + ' family pays higher tips, with avg of ' + mark.average);
}
*/

var numberList = [2,3,9,2,4,1,5,7];
document.getElementById("inArray").innerHTML = "Number in array is "+ numberList;

function asc() {
    numberList.sort(function (a, b) {return a-b});
    document.getElementById("asc").innerHTML = numberList; 
}

function desc() {
    numberList.sort(function (a, b) {return b-a});
    document.getElementById("desc").innerHTML = numberList;
} 

function delFun() {

    let numberList = [2,3,9,2,4,1,5,7];

    let x = parseInt(document.getElementById("deleteNum").value)

    numberList = numberList.filter((i)=> i!=x);
    
    document.getElementById("delFun").innerHTML = "Result is  "+ numberList;

} 
