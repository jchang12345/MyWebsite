day2
//objects , and structures

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>

<script>
var person = 
{
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
//seems pretty standard struct declaration almost , refer to above syntax when 
//handling structs

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>

</body>
</html>

//typeof gives me the string or number or data type of var
//function definitions require the () , else if u just call function like
//below, it returns output as a function definition. 

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo").innerHTML = person.fullName; //attach a () to 
//get the function to return first and last name

//also could do this 
document.getElementById("demo").innerHTML =
person["firstName"] + " " + person["lastName"];



//calling a function to do some work
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World!";
}
</script>
<body>
<button onclick="myFunction()">Try it</button>

<p id="demo"></p>
</body>


//can also do this where a function takes in arguments or parameters.
<button onclick="myFunction('Harry Potter',50)">Try it</button>

<p id="demo"></p>

<script>
function myFunction(name,job) {
    document.getElementById("demo").innerHTML =
    "Welcome " + name + ", the " + job + ".";
}
</script>


//performs a calculation of a*b

<p id="demo"></p>

<script>
function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
</script>

//accessing date builtin function, seperate print out 

<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?
</button>
//change the button itself to the time
<button onclick="this.innerHTML=Date()">The time is?</button>
//the difference is in document get element id, we write to the text underneath
//in the this.innerhtml, we refer to button obj as being replaced w/ time.

//but in short, to make it look nice and neat, we want to use functions...

<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

//string length is...
txt.length
//the backslash can break the string with a space.
"Hello \ Dolly!"; //but cant break code with a backslash like / hello dolly
//find index of a certain string
var pos = str.indexOf("locate");
 //basically does a search on a var, then returns position of first occurence.

//inside my script, I have a function that takes a string and matches 
//for key string, then writes it to the document. it does the match globally.
//due to /g
 <script>
function myFunction() {
    var str = "The rain in SPAIN stays mainly in the plain";//rain mainly, plain
    //note spain doesnt count b/c not lowercase, this is a case sensitive match and search basically. 
    var res = str.match(/ain/g);
    document.getElementById("demo").innerHTML = res;
}
</script>

//use replace to replace text (swap out the original and insert new)
<p id="demo">Please visit Microsoft!</p>

<script>
function myFunction() {
    var str = document.getElementById("demo").innerHTML; 
    var txt = str.replace("Microssoft","W3Schools");
    //if the text does not exist, it doesnt do anything.
    document.getElementById("demo").innerHTML = txt;
}
</script>
//.toUpperCase() or .toLowerCase() can make a whoel string upper or lower case.

//splitting a string by looking for comma into an array. 2nd pos is "c"
<script>
function myFunction() {
    var str = "a,b,c,d,e,f";
    var arr = str.split(",");
    document.getElementById("demo").innerHTML = arr[2];
}
</script>

//integers have a 15 digit accuracy
//floating arithmetic isnt always accurate by trailing 0s
//0x preceding items are interpreted as hexadecimal

var myNumber=128;
//myNumber.toString(16); //gives me decimal value of myNumber
/*
   myNumber.toString(16) + " Hexadecimal, " +
    myNumber.toString(8) + " Octal, " +
    myNumber.toString(2) + " Binary."
*/
var num=10;

while(num!=Infinity)// is a key word

<script>
function myFunction() 
{
    var myNumber = 2; 
    var txt = "";
    while (myNumber != Infinity) 
    {
        myNumber = myNumber * myNumber;
        txt = txt + myNumber + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}
</script>

//other built in javascript library functions include...
/*
Math.PI
Math.round(4.4) //returns 4  , 4.5 rule
Math.sqrt(64)  //retunrs 8
Math.pow(8,2) //returns 64
Math.abs(-4.4)  //returns 4.4
Math.ceil(4.4)  //returns 5 , rounds UPPPPPPP no matter what
Math.floor(4.7)   //retunrs 4 , rounds DOWN no matter what so das what
//that one bitch was talking about in DAS class
Math.sin(90 * Math.PI / 180)  //sin(pi/2==1)
Math.cos(0*Math.PI/180)//cos 0=1
Math.max(0, 150, 30, 20, -8, -200); //in a SET of arguments, return max,
//in this case, max is 150
Math.min(0, 150, 30, 20, -8, -200); //min, is -200
Math.random() //0 included, 1 excluded, range of num in b/w
to get 0-9, mult by 10, 0-10 mult by 11 

*/



//INFO ON THE DATE CLASSs
var d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear(); //gets year, 2017
d.getTime();// returns internal clock time from jan,1,1970
d.setFullYear(2020, 0, 14); //year, date from 0-11. any carry over just pushes
//and does the convert private function 
document.getElementById("demo").innerHTML = d;
d.toUTCString(); //different time zone i guess GMT instead of PST, which is 
//our default
d.getDay();//gives us the day as a number, tuesday is = 2
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()]; //instead of #.
//i get to return tuesday as the day instead. op


//printing in arrays actually means printing EVERYTHING in the array
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
//means print Saab,Volvo,BMW exactly like shown. with commas. no spaces.

//you can concatenate arrays with function concat()
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); //if more than 1 array, just add a
//comma and attach the next var array
var array2 = ["asdf", "basdf"];
//var myChildren = myGirls.concat(myBoys,array2); //if more than 1 array, just add a
document.getElementById("demo").innerHTML = myChildren;

//u can join elements in an array. default of join() is , separator. you can
//overload the param function b/c its a overloadable function
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * "); //space star
//separator

//can call the pop to push and pop a array element like...
fruits.pop();
 fruits.push("Kiwi");
 //sort and reverse are also allowed
 fruits.sort();
 fruits.reverse();
 fruits.shift(); //removes first, and shifts everything 1 to left
 var p=fruits.slice(1,3); //from 1 to up to but not including 3, 
 //p is array with orange and apple. 
 fruits.splice(2, 0, "Lemon", "Kiwi");
//inserts at position 2, lemon and kiwi. can keep splicing, overloadable
//only need to pass in any number of parameters doesnt matter.
fruits.toString(); //turns array into a string separated by commas.
fruits.unshift("Lemon", "k"); //can insert front like this.
//can insert as many items to front as needed. 




 //ascending order sort (default sort is alphabetical)
points.sort(function(a, b){return a - b});
//descending order sort
points.sort(function(a, b){return b - a});

//a little bit more work sorting algorithm may look like this... kinda like
//in hw4 for CS32 last question... when stl sorting
var cars = 
[
	{type:"Volvo", year:2016},
	{type:"Saab", year:2001},
	{type:"BMW", year:2010}
]

displayCars();

function myFunction() {
    cars.sort(function(a, b){return a.year - b.year});
    displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}

//NaN means NOT A NUMBEr though is a type number.
/*  https://www.w3schools.com/js/js_examples.asp on website, if i need to check below...
Convert a number to a string using String()
Convert a number to a string using toString()
Find out if a variable is an array
Find out if a variable is a date
*/
//string comparison is not same as an int!

//creating new obj
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";

//using a ctor
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

document.getElementById("demo").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age; 

//objects are mutable
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

var x = person;
x.age = 10;

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";

//you can actually add new properties to an obj on the fly like...
var person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
};
person.nationality = "English";
document.getElementById("demo").innerHTML =
person.firstname + " is " + person.nationality + ".";
//nationality was a newbie not initialied in person struct

