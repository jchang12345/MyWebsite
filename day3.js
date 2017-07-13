//day3.js
//using JSON objs

var myObj, x;
myObj = { "name":"John", "age":30, "car":null };
x = myObj.name;
//or x = myObj["name"];
x = myObj["name"]; //equivalent to above.
document.getElementById("demo").innerHTML = x;

var myObj = { "name":"John", "age":30, "car":null };
for (x in myObj) {
    document.getElementById("demo").innerHTML += x + "<br>";

//nested object in a object 
    var myObj = {
  "name":"John",
  "age":30,
  "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
  }
}
myObj.cars.car2 = "Mercedes";
document.getElementById("demo").innerHTML += myObj.cars.car2 + "<br>";
//or:
document.getElementById("demo").innerHTML += myObj.cars["car2"];
//delete myObj.cars.car2; deletes the car2 of cars so cars only has ford fiat 

//using parse JSON obj . parse to get the details of a json object.
var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age +obj.city;


/*** OK THIS IS PROBABLY CORE TO MANY THINGS I WANNA DO FOR WEBSITE PAY ATNTN

/*Use the XMLHttpRequest to get the content of a file.
*/

<p id="demo"></p>

<script>

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "json_demo.txt", true);
xmlhttp.send();

</script>

<p>Take a look at <a href="json_demo.txt" target="_blank">json_demo.txt</a></p>


//now what if using it to open an ARRAY FILE in JSON instead of a obj struct
<p id="demo"></p>

<script>

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myArr = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myArr[0];
    }
};
xmlhttp.open("GET", "json_demo_array.txt", true);
xmlhttp.send();

</script>

<p>Take a look at <a href="json_demo_array.txt" target="_blank">json_demo_array.txt</a></p>

//turning an objects birth into a date and accessing the birth as a date.
//IOW turned a string into a date. parse in this case i guess is op.
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth; 



//think of this parse thing and obj as a map
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }});
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth; 

//string into a function.
var text = '{ "name":"John", "age":"function() {return 30;}", "city":"New York"}';
var obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");

document.getElementById("demo").innerHTML = obj.name + ", " + obj.age(); 
//create a string from JSON obj
//out put looks like {"name":"John","age":30,"city":"New York"}
var obj = { "name":"John", "age":30, "city":"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
//simalarly, can turn the above array into a string, output same as above.
var arr = [ "John", "Peter", "Sally", "Jane" ];
var myJSON = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myJSON;
//dates can get converted toooo..
var obj = { "name":"John", "today":new Date(), "city":"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
//a possible output:
//{"name":"John","today":"2017-07-05T05:47:20.084Z","city":"New York"}
//however, functions will GET OMITTED
var obj = { "name":"John", "age":function () {return 30;}, "city":"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
//however, this in b/w step below will preserve the function when convert to
//a str
obj.age = obj.age.toString(); //output is below
//{"name":"John","age":"function () {return 30;}","city":"New York"}

//json parsing a php file. the php is called demo_file 
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "demo_file.php", true);
xmlhttp.send();

//and this is the php file
<?php
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;
?>



//basically, this is the js file

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj[2];
    }
};
xmlhttp.open("GET", "demo_file_array.php", true);
xmlhttp.send();
//and this is the php file
<?php
$myArr = array("John", "Mary", "Peter", "Sally");

$myJSON = json_encode($myArr);

echo $myJSON;
?>


//js file
var obj, dbParam, xmlhttp;
obj = { "table":"customers", "limit":12 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
    }
};
xmlhttp.open("GET", "json_demo_db.php?x=" + dbParam, true);
xmlhttp.send();
//php file
<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET["x"], false);

$conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");
$result = $conn->query("SELECT name FROM ".$obj->table." LIMIT ".$obj->limit);
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
?>
