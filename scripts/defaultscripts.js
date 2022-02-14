function scriptTest() {
    alert("Hey my script is running!");
}
function hello() {
    let name = document.getElementById("name").value;
    let emotion = document.getElementById("emotion").value.toLowerCase();
    document.getElementById("hello").innerHTML = (
        "<p>The Teal Hound welcomes you, " + name + "! I can tell that you're feeling " + emotion + "."
        )
}

function calcTax() {
  var paid = prompt("Enter how much you paid");
  paid = parseFloat(paid);
  var total = (paid * 1.07);
  total = parseFloat(total);
  alert("Total after tax is: " + total);
}

function calcMPG() {
  var miles = prompt("Enter how many miles you drove.");
  miles = parseFloat(miles);
  var gallons = prompt("Enter how many gallons you use.");
  gallons = parseFloat(gallons);
  var mpg = miles / gallons;
  mpg = parseInt(mpg);
  alert("You got: " + mpg + " miles per gallon");
}

function sum(max) {
  var a = Math.floor(Math.random() * (max + 1));
  a = parseInt(a)
  var b = Math.floor(Math.random() * (max + 1));
  b = parseInt(b);
  var sum = (a + b);
  sum = parseInt(sum);
  alert("The sum of the two random numbers is: " + sum);
}

function FahrenheittoCelsius() {
  var temp = prompt("Enter the temperature in Fahrenheit.");
  temp = parseFloat(temp);
  var celsius = (temp-32)*(5/9);
  celsius = parseFloat(celsius);
  let newtemp = celsius.toFixed(2);
  alert("The temperature in Celsius is: " + newtemp);
}

function MilestoKilo() {
  var mile = prompt("Enter how many miles.");
  mile = parseFloat(mile);
  var kilo = (mile*1.609344);
  kilo = parseFloat(kilo);
  let newmile = kilo.toFixed(2);
  alert("The distance in kilometers is: " + newmile);
}