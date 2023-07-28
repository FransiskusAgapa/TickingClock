let theSeconds = document.querySelector("#seconds");
let theMinutes = document.querySelector("#minutes");
let theHours = document.querySelector("#hour");

function getSecondsSinceStartOfDay() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}

setInterval(function () {
  var time = getSecondsSinceStartOfDay();
  console.log(time);

  // seconds
  let sec = (time / 60) * 360 + 90;
  theSeconds.style.transform = `rotate(${sec}deg)`;
  // minutes
  let min = (time / 60) * 360 + ((time / 60) * 6 + 90);
  theMinutes.style.transform = `rotate(${min})`;
  // hour
  let hour = (time / 12) * 360 + (time / 60) * 30 + 90;
  theHours.style.transform = `rotate(${hour})`;
}, 1000);

/* animate the 'My clock' text */

function textColorOn(element) {
  element.classList.add("changeColor");
}

function textColorOff(element) {
  element.classList.remove("changeColor");
}

/* animation for clock */

let twelve = document.querySelector("#twelve");

function backColorOn(element) {
  element.classList.add("backColor");
}

function backColorOff(element) {
  element.classList.remove("backColor");
  twelve.classList.remove("numColor");
}
