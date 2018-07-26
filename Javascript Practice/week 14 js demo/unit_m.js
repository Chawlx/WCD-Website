// this is just an output
/*
this is a multi line comment
*/
var derren = 0;
var tengboon = "i am tengboon";
var price = 1.23;

derren += 10;



// access div-change
var divChange = document.querySelector("#div-change");
// just for checking. i kiasu and kiasi
console.log(divChange);
divChange.textContent  = tengboon + derren;

// call or invoke function
// edwin();

// create function to make life easier. 
// call one line code to run many lines.. woo hoo!
// modular and reusable. 
// reduce, reuse, recycle. save my world
// similar to methods in Java
function edwin(){
    console.log("hello. welcome to javascript");
    console.log("error (h)er()e" + derren);

    console.log("line 3");

    divChange.textContent  = "I'm clicked!!!";

    // change the style class
    // combine if need be
    divChange.className = "style2 style3";
}

// add event listener to my special link
var clickme = document.querySelector("a.clickme");
console.log(clickme);
clickme.addEventListener("click", edwin);

var a = "10";
var b = 10;

console.log(a==b);
console.log(a===b);