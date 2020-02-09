let person = {
    firstname: "pinki",
    lastname: "sharma",
    age: 21,
    eyecolor: "brown",
    fullname: function() {
        return this.firstname + "" + this.lastname + "" + this.age
    }
};
console.log(person.fullname());