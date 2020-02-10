/*var fruits = ["orange", "mango", "kiwi", "banana"]
console.log(fruits.toString());
console.log(fruits.pop());
console.log(fruits.push("grapes"));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits.unshift("lemon"));
console.log(fruits[0]);
*/
//push and pop on array
//fruits.push("melon") //to add elements
//console.log(fruits)
//fruits.pop() //to remove items
//console.log(fruits)
//we have some similar method to add or remve items
//shift   and unshift
//fruits.shift() // emove the first item from the array and return it

//console.log(fruits)
//fruits.unshift("kiwi", "grapes")
// insert new element at the start of the array
//console.log(fruits)
//var cars = ["volvo", "bmw", "audi", ]
//console.log(cars);
//cars[0] = "scorpio";
//console.log(cars);
//cars.push("tavera");
//console.log(cars);
//cars.pop();
//console.log(cars);
//console.log(cars.shift());
//console.log(cars.unshift("iten"));
var number = [1, 23, 4, 54, 22, 12];
//console.log(number.sort());
//for descending
number.sort(function(a, b) {
    return b - a
});
number.sort(function(a, b) {
    return a - b
})
console.log(number);

console.log(number);