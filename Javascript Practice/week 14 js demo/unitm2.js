// for testing purpose. to ensure js is working
console.log("script running");

// select the input textfield
var tf = document.querySelector("#ameen");
var feedback = document.querySelector("#feedback");
//console.log(tf);
// add event listener to track changes in tf
tf.addEventListener("keyup", function(){
    console.log(tf.value);
}); 

var mybutton = document.querySelector("#mybutton");
// another way of putting function in listener
// mybutton.addEventListener("click", ()=>{
//     console.log("click working");
// }); 
mybutton.addEventListener("click", myClick);

function myClick(){
    console.log("click working");
    var content = tf.value;
    // check if content is empty
    // === check value + type
    // == check value
    // if(content === ""){
    if(content.length <= 0){
        feedback.textContent = "type something laaaa...";
    }
}