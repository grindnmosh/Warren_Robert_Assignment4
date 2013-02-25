//alert("JavaScript works!");

/*
Robert Warren
02/06/2013
Project 4
Libraries
github: https://github.com/grindnmosh/Warren_Robert_Assignment2
*/


/*String
1. Does a string follow a 123-456-7890 pattern like a phone number?
2. Does a string follow an aaa@bbb.ccc pattern like an email address?
3. Is the string a URL? (Does it start with http: or https:?)
4. Title-case a string (split into words, then uppercase the first letter of each word)
5. Given a string that is a list of things separated by a given string, as well as another string separator, 
	return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".*/



//1.
var phoneNumber = function (trueNumber) {
	var	start = trueNumber.indexOf("-"),
		middle = trueNumber.lastIndexOf("-");
		last = trueNumber.length,
		areaCode = trueNumber.substring(0,start),
		prefix = trueNumber.substring(4,middle),
		suffix = trueNumber.substring(8,last);
		//begin = function (areaCode) {
		if (areaCode.length === 3 && prefix.length === 3 && suffix.length === 4) {
			console.log(true)	
		} else {
			console.log(false)
		}
	}	


phoneNumber("602-688-1290") //true

phoneNumber("50-55-190") //false


//2.
var email = function (trueEmail) {
	var user = trueEmail.indexOf("@");
	trueEmail.substring(0, user);
	var	d = trueEmail.indexOf("@"),
		end = trueEmail.indexOf(".");
	trueEmail.substring(d, end);
	var	g = trueEmail.indexOf("."),
		last = trueEmail.length;
	trueEmail.substring(g,last);
	if (trueEmail.contains("@") && trueEmail.endsWith(".com") || trueEmail.contains("@") && trueEmail.endsWith(".edu") ) {
			console.log(true)
	} else {
			console.log(false)
	}
}

email("grindnmosh@fullsail.edu")

email("grindnmosh@gmail.com")

email("I love Breaking Bad.com")


//3.
var testUrl = function (url) {
	if (url.startsWith("http://") || url.startsWith("https://")) {
		console.log(true);	
	} else {
		console.log(false);
	}
}

testUrl("http://fullsail.edu")
testUrl("https://fullsail.edu")
testUrl("Fullsail Rules")
testUrl("http:/fullsail.edu")
testUrl("httpt://fullsail.edu")


//4.
function splitString(stringToSplit, separator) {
	var arrayOfStrings = stringToSplit.split(separator);
  	console.log('The original string is: "' + stringToSplit + '"')
	console.log('The separator is: "' + separator + '"')
	console.log("The array has " + arrayOfStrings.length + " elements: ")

	for (var i=0; i < arrayOfStrings.length; i++)
    console.log(arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].substr(1).toLowerCase());
};

var str = "learning to code is fun"
var space = " ";
splitString(str, space);	

//5.
var fruit = "apples,oranges,bananas";
var newFruit = fruit.replace(/,/gi, "/");
console.log(newFruit); 


/*Number
6. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
7. Fuzzy-match a number: is the number above or below a number within a certain percent?
8. Find the number of hours or days difference between two dates.
9. Given a string version of a number such as "42", return the value as an actual Number, such as 42.*/

//6.
//n.toFixed() 
2.1.toFixed(2)
console.log(2.1.toFixed(2));
2.1.toFixed(6)
console.log(2.1.toFixed(6));
2.1.toFixed(0)
console.log(2.1.toFixed(0));

//7.
var fuzzyNum = function (num, compareNum, percent) {
		var percentage = (num/compareNum) * 100;
		if ((num >= compareNum && percentage >= percent) || (num < compareNum && percentage < percent)) {
			console.log(false);
		} else {
			console.log(true);
		};	
	};

fuzzyNum(60, 103, 40)

//8.

	var wedAnn = new Date("January 13, 2013 23:13:13");
    var today = new Date();
    var one_day = 1000 * 60 * 60 * 24;
    console.log(Math.ceil((today.getTime()) - (wedAnn.getTime()) / one_day) + " hours since " + wedAnn);
    console.log(wedAnn)
    console.log(today)

// producing inaccurate hours. trying to find bug.

//9.
console.log(parseInt("10"));
console.log(parseInt("42"));
console.log(parseInt("56"));


/*Array
10. Find the smallest value in an array that is greater than a given number
11. Find the total value of just the numbers in an array, even if some of the items are not numbers.
12. Given an array of objects and the name of a key, return the array sorted by the value of that key in each 
	of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].*/
	
//10.


Array.prototype.minGreaterThan=function(a){var t=this,r=Number.POSITIVE_INFINITY,i;
	for (i=0;i<t.length;i++) if (a<t[i] && t[i]<r) r=t[i];
	return r;
}

numberJumble = [10, 15, 23, 13, 18, 7, 27, 25],n=11;
console.log(numberJumble.minGreaterThan(n));

//11.
var mixedUp = [10, "house", "23", "heart", 18, "love", 27, "marriage"];
var sum = 0;
for (var i = 0; i < mixedUp.length; i++) {
	if (parseInt(mixedUp[i])) { 
		sum += mixedUp[i];
	}
}
console.log(sum);//is running numbers together not adding


//12.
var wifeAndKids = {
	"family": 
	[
		{
			"relationship": "wife",
			"name":         "Cynthia",
			"age":           33
		},
		{
			"relationship": "oldestStepson",
			"name":         "Michael",
			"age":          14
		},
		{
			"relationship": "youngestStepson", 
			"name":         "Johnny",
			"age":          11
		},
		{
			"relationship": "stepdaughter",
			"name":         "Alexis",
			"age":           12
		}
	]
};
console.log(wifeAndKids.family.sort(function(a, b) { return a.age > b.age}));
console.log(wifeAndKids.family.sort(function(a, b) { return a.age < b.age}));


