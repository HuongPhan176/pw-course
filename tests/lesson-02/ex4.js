let myHeight = 159; //expected input in cm is in between 100 and 200 (100< myHeight <200)

idealHeight = ((myHeight - 100) * 9) / 10;
maximumHeight = myHeight - 100;
minimumHeight = ((myHeight - 100) * 8) / 10;
console.log("Ideal Height: " + idealHeight + " kg, Maximum Height: " + maximumHeight + " kg, Minimum Height: " + minimumHeight + " kg");