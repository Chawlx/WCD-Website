$("textarea").ss("background-color", "ref");
//select by class
$(".bg").hide();
//select by attribute
//$("[for]").hide():
//select the first input element
$("input:first").hide();

//add event listener to the button
// ()==> shortcut for function()
$("mybutton").on('click', myclick);
function myclick(){
    //toggle the textarea
    $("textarea").fadetoggle();
}