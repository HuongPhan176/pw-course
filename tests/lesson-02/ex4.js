let myTaller = 159; //expected input in cm is in between 100 and 200 (100< myTaller <200)

idealTaller = ((myTaller - 100) * 9) / 10;
maximumTaller = myTaller - 100;
minimumTaller = ((myTaller - 100) * 8) / 10;
console.log("Ideal Taller: " + idealTaller + " kg, Maximum Taller: " + maximumTaller + " kg, Minimum Taller: " + minimumTaller + " kg");