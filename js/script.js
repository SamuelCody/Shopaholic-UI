// Navbar transition on scroll
$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 50) {
              $('nav').addClass('solid');
          } else {
              $('nav').removeClass('solid');
          }
        });
});


var curday;
var secTime;
var ticker;

function getSeconds() {
  var nowDate = new Date();
  var dy = 4; //Sunday through Saturday, 0 to 6
  var countertime = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 18, 0, 0); //20 out of 24 hours = 8pm

  var curtime = nowDate.getTime(); //current time
  var atime = countertime.getTime(); //countdown time
  var diff = parseInt((atime - curtime) / 1000);
  if (diff > 0) {
    curday = dy - nowDate.getDay()
  } else {
    curday = dy - nowDate.getDay() - 1
  } //after countdown time
  if (curday < 0) {
    curday += 7;
  } //already after countdown time, switch to next week
  if (diff <= 0) {
    diff += (86400 * 7)
  }
  startTimer(diff);
}

function startTimer(secs) {
  secTime = parseInt(secs);
  ticker = setInterval("tick()", 1000);
  tick(); //initial count display
}

function tick() {
  var secs = secTime;
  if (secs > 0) {
    secTime--;
  } else {
    clearInterval(ticker);
    getSeconds(); //start over
  }

  var days = Math.floor(secs / 86400);
  secs %= 86400;
  var hours = Math.floor(secs / 3600);
  secs %= 3600;
  var mins = Math.floor(secs / 60);
  secs %= 60;

  //update the time display
  document.getElementById("countdown").innerHTML = curday + 'd' + ' ' + hours + 'h' + ' ' + mins + 'm' + ' ' + secs + 's';
}
