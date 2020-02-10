var number1 = [2, 12, 4, 21, 5, 54, 23]
var number2 = number1.map(myfunction)

function myfunction(value, index, array) {
    return value * 2;
}
console.log(number2);