/*
Revisions Bookstore and Cafe style sheet
Filename: script.js

Author: CHAW LI XIANG
Date: 20 July 2018
HTML5 and CSS3 Illustrated Unit J, Visual Workshop
*/

var smallersize= document.querySelector(".smaller-size");
var normalsize = document.querySelector(".normal-size");
var largersize = document.querySelector(".larger-size");
var select = document.querySelector(".selected-button");
var body = document.querySelector("body");

smallersize.addEventListener("click", small);
normalsize.addEventListener("click", normal);
largersize.addEventListener("click", large);

function small(){
body.className = "smaller-size"; 

    smallersize.className = "larger-size"; smallersize.className = "selected-button"; //highlight selected button
    normalsize.className = "normal-size";
    largersize.className = "larger-size";
}

function normal(){
body.className = "normal-size"; 

    smallersize.className = "smaller-size"; 
    normalsize.className = "larger-size"; normalsize.className = "selected-button"; //highlight selected button
    largersize.className = "larger-size";
}

function large(){
body.className = "larger-size"; 

    smallersize.className = "smaller-size";
    normalsize.className = "normal-size";
    largersize.className = "larger-size"; largersize.className = "selected-button"; //highlight selected button
}

function select(){
    select.className="selected-button";
    body.className="selected-button";
}