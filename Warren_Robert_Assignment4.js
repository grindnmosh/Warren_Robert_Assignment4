//alert("JavaScript works!");

/*
Robert Warren
02/06/2013
Project 4
Libraries
github: https://github.com/grindnmosh
*/


/*String
1. Does a string follow a 123-456-7890 pattern like a phone number?
2. Does a string follow an aaa@bbb.ccc pattern like an email address?
3. Is the string a URL? (Does it start with http: or https:?)
4. Title-case a string (split into words, then uppercase the first letter of each word)
5. Given a string that is a list of things separated by a given string, as well as another string separator, 
	return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".*/

function stringLibrary () {
//1.
	function phoneNumber (trueNumber) {
	var	start = trueNumber.indexOf("-"),
		middle = trueNumber.lastIndexOf("-");
		last = trueNumber.length,
		areaCode = trueNumber.substring(0,start),
		prefix = trueNumber.substring(4,middle),
		suffix = trueNumber.substring(8,last);
		if (areaCode.length === 3 && prefix.length === 3 && suffix.length === 4) {
			console.log("This string is a phone number.");
		} else {
			console.log("Please re-enter the phone number in this format '123-456-7890'")
		}
	}	




//2.
	function emailPattern (emailCheck) {
		var emailAddress = emailCheck
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
		if (emailPattern.test(emailAddress)) {
			console.log("This email follows the aaa@bbb.ccc pattern.");
		} else {
			console.log("This email does not follow the aaa@bbb.ccc pattern.");
		}

	};

//3.
	function checkUrl (testUrl) {
		var url = testUrl
		var testCheck = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
		var isUrl = testCheck.test(url);
		console.log("This string is a " + isUrl + " URL.");
	};

//4.
	function splitString(stringToSplit, separator) {
		var arrayOfStrings = stringToSplit.split(separator);
  		console.log('The original string is: "' + stringToSplit + '"')
		console.log('The separator is: "' + separator + '"')
		console.log("The array has " + arrayOfStrings.length + " elements: ")

		for (var i=0; i < arrayOfStrings.length; i++)
		console.log(arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].substr(1).toLowerCase());
	};

//5.
	function changeSeparator (oldString) {
		var newString = oldString.replace(/,/gi, "/");
		if (oldString) {
		console.log(newString);
		}
	};

	return {
		"phoneNumber" : phoneNumber,
		"emailPattern" : emailPattern,
		"checkUrl" : checkUrl,
		"splitString" : splitString,
		"changeSeparator" : changeSeparator
	}
};

/*Number
6. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
7. Fuzzy-match a number: is the number above or below a number within a certain percent?
8. Find the number of hours or days difference between two dates.
9. Given a string version of a number such as "42", return the value as an actual Number, such as 42.*/

function numberLibrary () {
//6.
	function fixMoney(moneyToFix) {
		var money = moneyToFix
		money.toFixed(2)
		return console.log(money.toFixed(2));
};

//7.
	function fuzzyNum (num, compareNum, percent) {
		var percentage = (num/compareNum) * 100;
		if ((num >= compareNum && percentage >= percent) || (num < compareNum && percentage < percent)) {
			console.log(false);
		} else {
			console.log(true);
		};	
	};

//8.
	function timeDate (current, wedAnn) {
		var anniversary = wedAnn
		var today = current
		var Ms = (wedAnn - today); 
 	var days = Math.round(Ms / 86400000); 
	 var hours = Math.round((Ms % 86400000) / 3600000);
	 var minutes = Math.round(((Ms % 86400000) % 3600000) / 60000); 
	console.log(days + " days, " + hours + " hours, " + minutes + " minutes until my next wedding anniversary");
	};

//9.
	function strNum (num) {
		console.log(parseInt(num));
	}


	return {
		"fixMoney" : fixMoney,
		"fuzzyNum" : fuzzyNum,
		"timeDate" : timeDate,
		"strNum" : strNum

	};
};

/*Array
10. Find the smallest value in an array that is greater than a given number
11. Find the total value of just the numbers in an array, even if some of the items are not numbers.
12. Given an array of objects and the name of a key, return the array sorted by the value of that key in each 
	of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].*/
	
function arrayLibrary () {
//10.
///


//11.
	function findAdd (array) {
		var total = 0;
		for (var i = 0, j = array.length; i < j; i++) {
			if (array[i]/1 === array[i]) {
				total += array[i];
			};
		};
		console.log(total);
	};

//12.
	function family (array) {
		console.log(wifeAndKids.family.sort(function(a, b) { return a.age > b.age}));
		console.log(wifeAndKids.family.sort(function(a, b) { return a.age < b.age}));
	};
	
return {
		//"greaterThan" : greaterThan,
		"findAdd" : findAdd,
		"family" : family,
	};

};

console.log("String Tests");
var stringLib = stringLibrary();
stringLib.phoneNumber("602-688-1290");
stringLib.phoneNumber("50-55-190");
stringLib.checkUrl("http://www.fullsail.edu");
stringLib.checkUrl("https://www.fullsail.edu");
stringLib.checkUrl("Fullsail Rules");
stringLib.checkUrl("http:/ww.fullsail.edu");
stringLib.checkUrl("httpt://www.fullsail.edu");
stringLib.emailPattern("grindnmosh@fullsail.edu");
stringLib.emailPattern("grindnmosh@gmail.com");
stringLib.emailPattern("I love Breaking Bad.com");
stringLib.splitString("learning to code is fun", " ");
stringLib.changeSeparator("apples,oranges,bananas");
console.log(" ");

console.log("Number Tests");
var numLib = numberLibrary();
numLib.fixMoney(100.91565);
numLib.fixMoney(10);
numLib.fixMoney(10.5);
numLib.fixMoney(1569.91565);
numLib.fuzzyNum(60, 103, 40)
numLib.fuzzyNum(20, 150, 15)
var anniversary = new Date("January 13, 2014 23:13:13");
var today = new Date();
numLib.timeDate(today, anniversary);
console.log(today);
console.log(anniversary);
numLib.strNum("10");
numLib.strNum("42");
numLib.strNum("56");

console.log("Array Tests");
var arrayLib = arrayLibrary();
//var numberJumble = [10, 15, 23, 13, 18, 7, 27, 25],n=11;
//arrayLib.greaterThan(numberJumble);
var mixedUp = [10, "house", "heart", 18, "love", 27, "marriage"];
arrayLib.findAdd(mixedUp);//is running numbers together not adding
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
}
arrayLib.family(wifeAndKids.family)
