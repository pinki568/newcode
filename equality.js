// javascript has a equaltiy function
//in javascript   when you write in console
//1=="1"  it wil give true value it is a nostrict function
// it typecast write value  and make left value
//so here number after typecasting became equal to  string one  and string one  and string one are eual
// when we write 1===1 then it will give false value
// it is strict equality function it check type and the value of both right and left side
//when both are equal then it will give true value
console.log((1 + "1") == 11) //true
console.log("11" - 1 == 1) //  false  not a number NaN when we minus a number from a string  it will give NaN
    //here 11 typecast to a number so 10
console.log([] == "") //true
console.log([] == 0) //true
console.log(0 == "")//true
// here it means  string can be typcasted to 0
//[] arry can also be typecasted to   empty string
// so these all  arre equal
//run this also in console
// an empty object and empy array
//{}+[]// =0
//[]+{}// ="[object object]"
// here + operator try to typecast the vale before it
// so here +[] will become  0 

//see mdn equality= equaliy comparison  and sameness
 //abot strings
 //let str="aduidcidw" string are immutable 
 // immutable means str can only changed