//alert("JavaScript works!");

/*
Robert Warren
02/06/2013
Project 4
Libraries
github: https://github.com/grindnmosh
*/

var anniversary = new Date("January 13, 2014 23:13:13");
var today = new Date();
var numberJumble = [10, 15, 23, 13, 18, 7, 27, 25];
var mixedUp = [10, "house", "heart", 18, "love", 27, "marriage"];
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
var stringLib = stringLibrary();
var numLib = numberLibrary();
var arrayLib = arrayLibrary();	

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
		if ((isNaN(areaCode)) === false 
			&& (isNaN(prefix)) === false 
			&& (isNaN(suffix)) === false 
			&& areaCode.length === 3 
			&& prefix.length === 3 
			&& suffix.length === 4) {
			return true;
		} else {
			return false;
		};
	};

//2.
	function emailPattern (emailCheck) {
		if (emailCheck.indexOf("@") >= 4 && emailCheck.lastIndexOf(".") >= 7 && emailCheck.indexOf(" ") === -1) {
			return true;
		} else {
			return false;
		};
	};

//3.
	function checkUrl (url) {
		if (url.startsWith("http://") || url.startsWith("https://")) {
			return true;  
		} else {
			return false;
		};
	};

//4.
	function splitString (stringToSplit, separator) {
		var arrayOfStrings = stringToSplit.split(separator),
			string = "";
		for (var i=0; i < arrayOfStrings.length; i++) {
			var newString = arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].substr(1).toLowerCase();
			string = string.concat(newString + separator);
		};
		return string;	
	};

//5.
	function changeSeparator (oldString) {
		var newString = oldString.replace(/,/g, "/");
		// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String provided in the strings lesson.
		return newString;
	};

	return {
		"phoneNumber" : phoneNumber,
		"emailPattern" : emailPattern,
		"checkUrl" : checkUrl,
		"splitString" : splitString,
		"changeSeparator" : changeSeparator
	};
};

/*Number
6. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
7. Fuzzy-match a number: is the number above or below a number within a certain percent?
8. Find the number of hours or days difference between two dates.
9. Given a string version of a number such as "42", return the value as an actual Number, such as 42.*/

function numberLibrary () {
//6.
	//6.
	function fixMoney(money,dec) {
		return Number(money.toFixed(dec));
	};

//7.
	function fuzzyNum (num, compareNum, percent) {
		var percentage = (num/compareNum) * 100;
		if ((num >= compareNum && percentage >= percent) || (num < compareNum && percentage < percent)) {
			return false;
		} else {
			return true;
		};	
	};

//8.
	//8.
	function timeDate (current, wedAnn, timeInput) {
		var Ms = (wedAnn - current); 
 		var numDays = Math.round(Ms / (1000*60*60*24)); 
		var numHours = Math.round(Ms / (1000*60*60));
		var numMinutes = Math.round(Ms / (1000*60)); 
		 if(timeInput === "days") {
		 	return numDays + " days";
		 } else if (timeInput === "hours") {
		 	return numHours + " hours";
		} else if (timeInput === "minutes") {
	 		return numMinutes + " minutes";
		};	
	};

//9.
	function strNum (num) {
		return parseInt(num);
	};


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
	function greaterThan (array,num) {
		if (num >= array[0] && num < array[array.length-1]) {
			array.push(num);
			array.sort(function(a,b){return a-b;});
			result = array[array.lastIndexOf(num) + 1];
			return result;
		} else {
			return null;
		};
	};

//11.
	function findAdd (array) {
		var total = 0;
		for (var i = 0, j = array.length; i < j; i++) {
			if (array[i]/1 === array[i]) {
				total += array[i];
			};
		};
		return total;
	};

//12.
	function family (array,key) {
		return (array.sort(function(a, b) { return a[key] > b[key]}));
		
	};
	
return {
		"greaterThan" : greaterThan,
		"findAdd" : findAdd,
		"family" : family
	};

};

console.log("String Tests");
console.log(stringLib.phoneNumber("602-688-1290"));
console.log(stringLib.phoneNumber("602-6p8-1290"));
console.log(stringLib.phoneNumber("50-55-190"));
console.log(stringLib.emailPattern("grindnmosh@fullsail.edu"));
console.log(stringLib.emailPattern("grindn mosh@gmail.com"));
console.log(stringLib.emailPattern("I love Breaking Bad.com"));
console.log(stringLib.checkUrl("http://www.fullsail.edu"));
console.log(stringLib.checkUrl("https://www.fullsail.edu"));
console.log(stringLib.checkUrl("Fullsail Rules"));
console.log(stringLib.checkUrl("http:/www.fullsail.edu"));
console.log(stringLib.checkUrl("httpt://www.fullsail.edu"));
console.log(stringLib.splitString("learning to code is fun", " "));
console.log(stringLib.changeSeparator("apples,oranges,bananas"));
console.log(" ");

console.log("Number Tests");
console.log(numLib.fixMoney(100.91565,2));
console.log(numLib.fixMoney(10,2));
console.log(numLib.fixMoney(10.5,6));
console.log(numLib.fixMoney(1569.91565,3));
console.log(numLib.fuzzyNum(60, 103, 40));
console.log(numLib.fuzzyNum(20, 150, 15));
console.log((numLib.timeDate(today, anniversary,"days")) + " till my next wedding anniversary");
console.log((numLib.timeDate(today, anniversary,"hours")) + " till my next wedding anniversary");
console.log((numLib.timeDate(today, anniversary,"minutes")) + " till my next wedding anniversary");
console.log(today);
console.log(anniversary);
console.log(numLib.strNum("10"));
console.log(numLib.strNum("42"));
console.log(numLib.strNum("56"));
console.log(" ");

console.log("Array Tests");
console.log(arrayLib.greaterThan(numberJumble,11));
console.log(arrayLib.findAdd(mixedUp));
console.log(arrayLib.family(wifeAndKids.family,"age"));
console.log(" ");