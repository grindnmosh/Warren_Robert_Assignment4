//alert("JavaScript works!");

/*String
1. Does a string follow a 123-456-7890 pattern like a phone number?
2. Does a string follow an aaa@bbb.ccc pattern like an email address?
3. Is the string a URL? (Does it start with http: or https:?)
4. Title-case a string (split into words, then uppercase the first letter of each word)
5. Given a string that is a list of things separated by a given string, as well as another string separator, 
	return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".*/

// 1.
var phoneNumber = function (trueNumber) 
{
	var	end = trueNumber.indexOf("-"),
	start = trueNumber.lastIndexOf("-");
	last = trueNumber.length; 
	trueNumber.substring(0,end);
	trueNumber.substring(start,end);
	trueNumber.substring(start,last);
	if (trueNumber.length === 12) {
			console.log(true)
	} else if (trueNumber.length <= 11) {
			console.log(false)
	}
};

phoneNumber("602-688-1290") //true

phoneNumber("505-55-190") //false

//2.
var email = function (trueEmail) {
	var user = trueEmail.indexOf("@");
	trueEmail.substring(0,user);
	var	d = trueEmail.indexOf("@"),
		end = trueEmail.indexOf(".");
	trueEmail.substring(d,end);
	var	g = trueEmail.indexOf("."),
		last = trueEmail.length;
	trueEmail.substring(g,last);
	if (trueEmail.indexOf("@") >= 4 & trueEmail.lastIndexOf(".") >= 7) {
			console.log(true)
	} else {
			console.log(false)
	}
}

email("grindnmosh@fullsail.com")

email("grindnmosh.fullsail.com")


//3.
var testUrl = function (url) {
	if (url.indexOf("http") >= 0) {
		console.log(true);
			if (url.indexOf("https") >= 0) {
				console.log(true);
			}
	} else {
		console.log(false);
	}
}



testUrl("http://fullsail.edu")

testUrl("https://fullsail.edu")

testUrl("Fullsail Rules")


/*Number
6. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
7. Fuzzy-match a number: is the number above or below a number within a certain percent?
8. Find the number of hours or days difference between two dates.
9. Given a string version of a number such as "42", return the value as an actual Number, such as 42.*/








/*Array
10. Find the smallest value in an array that is greater than a given number
11. Find the total value of just the numbers in an array, even if some of the items are not numbers.
12. Given an array of objects and the name of a key, return the array sorted by the value of that key in each 
	of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].*/