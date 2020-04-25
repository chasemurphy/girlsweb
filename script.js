

var myDate = new Date();
var hrs = myDate.getHours();

// var greet;

// if (hrs < 12)
// greet = 'Good Morning';
// else if (hrs >= 12 && hrs <= 17)
// greet = 'Good Afternoon';
// else if (hrs >= 17 && hrs <= 24)
// greet = 'Good Evening';

// document.getElementById("greeting").textContent = greet;


//PARKER BIRTHDAY
// Set the date we're counting down to
var countDownDateP = new Date("May 15, 2020 00:00:00").getTime();

// Update the count down every 1 second
var xP = setInterval(function() {

// Get today's date and time
var nowP = new Date().getTime();

// Find the distance between now and the count down date
var distanceP = countDownDateP - nowP;

// Time calculations for days, hours, minutes and seconds
var daysP = Math.floor(distanceP / (1000 * 60 * 60 * 24));
var hoursP = Math.floor((distanceP % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutesP = Math.floor((distanceP % (1000 * 60 * 60)) / (1000 * 60));
var secondsP = Math.floor((distanceP % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("parkerTimer").innerHTML = daysP + "d " + hoursP + "h "
+ minutesP + "m " + secondsP + "s ";

// If the count down is finished, write some text 
if (distanceP < 0) {
clearInterval(x);
document.getElementById("parkerTimer").innerHTML = "EXPIRED";
}
}, 1000);

//KENNA BIRTHDAY
// Set the date we're counting down to
var countDownDate = new Date("September 30, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("kennaTimer").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text 
if (distance < 0) {
clearInterval(x);
document.getElementById("kennaTimer").innerHTML = "EXPIRED";
}
}, 1000);
