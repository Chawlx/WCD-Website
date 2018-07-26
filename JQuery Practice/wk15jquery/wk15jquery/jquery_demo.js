// selecting by id
//$("#ameen").hide();
// selecting by tag
$("textarea").css("background-color", "red");
// select by class
$(".bg").hide();
// select by attribute
//$("[for]").hide();
// select the first input element
$("input:first").hide();

// add event listener to the button
// ()=> shortcut for function()
$("#mybutton").on('click', myclick);
function myclick(){
    // toggle the textarea
    $("textarea").fadeToggle();
    console.log("click working");
    
    
}

