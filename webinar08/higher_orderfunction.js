//if a function take a function as argument and return a function 
//then it is called a higher order function
// syntax for the higher order function
//fun(x,y){
// return z;
//}// here either x or y should be a function or 
// z should be a function
// javascript allows you to treat funcion as object
//example to take function as argument
//function getfirstname(fullname) {
//  return fullname.split("")[0]
//}

//function greeter(findname, fullname) {
//  let firstname = findname(fullname)
//console.log("hello" + firstname);

//}
//greeter(getfirstname, "pinki sharma ");
// example to reurn a function
function createGreeter(name) {
    let firstName = name.split("")[0]

    function greeter(name) {
        console.log("hello" + firstName)
    }
    return greeter();
}
let johngreeter = createGreeter("john doe");
let harrygreeter = createGreeter("hary potter");
johngreeter();
harrygreeter();``