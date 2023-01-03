// Current Time Setup for the Iphone Calculator

var date = new Date();
var hour = date.getHours();
document.getElementById("hour").innerHTML = hour;

var date = new Date();
var minute = date.getMinutes();
document.getElementById("minute").innerHTML = minute;

// chaging "*" into multiple "x" symbol

// var symbol = "x";
// document.querySelector('.multiplication').innerHTML = symbol;

// Calculation Part

let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '='){
             string = eval(string);
             document.querySelector('.value').value = string;
        }else if (e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('.value').value = string;
        }else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('.value').value = string;
        console.log(string);
       }
    })
});