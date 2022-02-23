var sides;
var entered;
var polygon;

function getSides() {
  sides = prompt("Welcome to The Teal Hound. To get tonight's entrance password, enter a number 1-10:");
  sides = parseFloat(sides);
  return sides;
}

function errorRetry() {
  sides = prompt("You have entered an invalid number please chose from 1 to 10.");
  sides = parseFloat(sides);
  return sides;
}

function validateEntry() {
  sides = Math.round(Math.abs(sides));
  if (sides > 10 || sides <= 0) {
    errorRetry();
  }
}

function getEntered() {
  
    getSides();
    var entered = Math.round(Math.abs(sides));
    validateEntry();
    while (sides <= 10) {
      if (entered == 1) {
        polygon = "hexagon";
      } 
      else if (entered == 2) {
        polygon = "digon";
      } 
      else if (entered == 3) {
        polygon = "trigon";
      } 
      else if (entered == 4) {
        polygon = "tetragon";

      } 
      else if (entered == 5) {
        polygon = "pentagon";

      } 
      else if (entered == 6) {
        polygon = "hexagon";

      } 
      else if (entered == 7) {
        polygon = "heptagon";

      } 
      else if (entered == 8) {
        polygon = "octagon";

      } 
      else if (entered == 9) {
        polygon = "enneagon";

      } 
      else if (entered == 10) {
        polygon = "decagon";
      }

      alert("That is a " + polygon);
      break;
    }

}

getentered()