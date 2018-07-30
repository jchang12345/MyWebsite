var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#Projects button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})




//might be able to do a bmi calculation later using this as a model...
/*
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Celcius to Fahrenhet</h2>

<p>Insert a number into one of the input fields below:</p>

<p><input id="c" onkeyup="convert('C')"> degrees Celsius</p>

<p><input id="f" onkeyup="convert('F')"> degrees Fahrenheit</p> 

<p>Note that the <b>Math.round()</b> method is used, so that the result will be returned as an integer.</p>

<script>
function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    } else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
    }
}
</script>

</body>
</html>



//after the bmi calculator, have a clock that just ticks on the website kinda
//interesting you can actually prog it like this.

<!DOCTYPE html>
<html>
<head>
<script>
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;



/*var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
document.getElementById("demo").innerHTML = greeting;*/

}
</script>
</head>

<body onload="startTime()">

<div id="txt"></div>

</body>
</html>



*/