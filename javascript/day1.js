Day 1 Website Practice, Javascript

//(delay print out basically, on click will print out )
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>


//(turn on and off a light bulb by switching pictures)
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attributes.</p>

<p>In this case JavaScript changes the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>

<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>


</body>
</html> 

//hiding elements
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can hide HTML elements.</p>

<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>


</body>
</html> 

//open a hidden element

<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can show hidden HTML elements.</p>

<p id="demo" style="display:none">Hello JavaScript!</p>

<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>

</body>
</html> 


//using a function, to change a paragraph , in the head of a html file
<html>
<head>
//pay attention to the usage of script in this html file.
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>

<body>

<h2>JavaScript in Head</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

</body>
</html> 


//using a function, to change a paragraph, in the body of a html file
<html>
<body>

<h2>JavaScript in Body</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html> 

//using an external javascript file to call for myfunction. 
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="myScript.js"></script>

</body>
</html>

//using an external javascript written by someone else, can prove to be useful to ref
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="https://www.w3schools.com/js/myScript.js"></script>

</body>
</html>


//and what if i have a javascript file written externally in a folder?
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="/js/myScript.js"></script>

</body>
</html>

//arithmetic and basic operations
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<script>
document.write(5 + 6); //use the document.write() pass in parameter and it will write 
//based on the script and take up spcae in the html file
</script>

</body>
</html> 

//but in reality, we might see something more like this...
<html>
<body>

<h2>My First Web Page</h2>
<p>My First Paragraph.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6; //use document.getElementById
//pass in the id, then .innerHTML it 	
</script>

</body>
</html> 

//you can write an alert, but im not going to be using that lmao

//command option j to activate the console log, and u can log stuff to a console.




//DOING STATEMENTS and actual programming language/coding now...
//basic primitave data types are vars, and ints can be convert to doubles if 
//specified the decimals.	
<html>
<body>

<h2>JavaScript Statements</h2>

<p>Statements are separated by semicolons.</p>

<p>The variables x, y, and z are assigned the values 5, 6, and 11.</p>

<p>Then the value of z is displayed in the paragraph below:</p>

<p id="demo"></p>

<script>
var x, y, z;
x = 5;
y = 6;
z = x + y;
document.getElementById("demo").innerHTML = z;
</script>


//strings are sorta separate, but not really. use 1 or 2 quotations
<h2>JavaScript Strings</h2>

<p>Strings can be written with double or single quotes.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 'John Doe';
</script>



<h2>JavaScript Variables</h2>

<p>In this example, x is defined as a variable.
Then, x is assigned the value of bro:</p>

<p id="demo"></p>

<script>
var x;
x = "bro";
document.getElementById("demo").innerHTML = x;
</script>

//i can also change the above bro get rid of quotes into a number etc
//assignment works sorta similarly, but keep in mind just like the above
//examples, that document.getElementById("idstr").innerHTML counts as a var
<h2>Assigning JavaScript Values</h2>

<p>In JavaScript the = operator is used to assign values to variables.</p>

<p id="demo"></p>

<script>
var x, y;
x = 5;
y = 6;
document.getElementById("demo").innerHTML = x + y;
</script>
//no discrimination b/w variable types btw, not like cpp or java.
//dude concatenation is slightly weird htough, works almost like normal but
//it default only one space b/w if u do try to space out strings
</body>
</html>

/*KEY IDEAS IN JAVASCRIPT TO UNDERSTAND AND LIVE BY*/
//JavaScript statements are executed by the browser.
//JavaScript code (or just JavaScript) is a sequence of JavaScript statements
//a lot of this information above and below are actually common coding sense
//put code inside curly braces code blocks basically. { }
//tbh a script is basically like a function that is run based on id i guess 
//and updates the html file.


<h2>JavaScript Variables</h2>

<p id="demo"></p>

<script>
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("demo").innerHTML =
"The total is: " + total;
</script>
//The result of adding "5" + 2 + 3 is 523 concatenates as strings.
//therefore string has dominance



var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;
document.getElementById("demo").innerHTML =
x + "<br>" + y + "<br>" + z;

//the br actually serves as a  separates or "endl basically"
//recall hr is the line slashing


//from now on assume everything follos the logic of...
/*
<p id="a"></p>

<script>
something here
document.getElementById("a").innerHTML= and somethings here
</script>
*/
var cars = ["Saab","Volvo","BMW"];

document.getElementById("demo").innerHTML = cars[0]; //same as array indexing
//output is Saab



