window.addEventListener("keypress",function(dets){
    if(dets.code === 'Enter'){
        document.querySelector("#m").style.top = "-100%";
        document.querySelector("#t").top = "100%";
    }
    // console.log(dets);
})
var date = new Date;
var month = date.getMonth()+1;
var day = date.getDate();
var year = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var res =  day + '/' + month + '/' + year;
console.log(res);
var d = date.getDay();
switch(d){
    case 0:
    d ="Sunday";
    break;
    case 1:
    d ="Monday";
    break;
    case 2:
    d = "Tuesday";
    break;
    case 3:
    d ="Wednesday";
    break;
    case 4:
    d = "Thursday";
    break;
    case 5:
    d ="Friday";
    break;
    case 6:
    d ="Saturday";
    break;
}
switch(month){
    case 1:
    var month = "Jnuaray";
    break;
    case 2:
    var month = "Febraury";
    break;
    case 3:
    var month = "March";   
    break;
    case 4:
    var month = "April";   
    break;
    case 5:
    var month = "May";   
    break;
    case 6:
    var month = "June";   
    break;
    case 7:
    console.log("July");
    break;
    case 8:
    var month = "August";   
    break;
    case 9:
    var month = "September";   
    break;
    case 10:
    var month = "October";   
    break;
    case 11:
    var month = "November";   
    break;
    case 12:
    month = "December";
    break;
    
}
console.log(day + month);
var tim = hours +  " : "+ minutes; 


document.querySelector("#top").textContent = tim;


var time = d + ", " + day + " "+ month; 
// console. log(time. getHours() + ":" + time)

document.querySelector("#bottom").textContent = time;
// document.querySelector("#t").style.fo = "Gilroy";


var s = document.querySelector("input")
s.addEventListener("input",function(){
    s.focus();
    if(s.value === "12345"){
        document.querySelector("#men").style.top = "-150%"
    }

    
})