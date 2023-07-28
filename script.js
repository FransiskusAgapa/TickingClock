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

  // SECOND
  let sec = (time / 60) * 360 + 90;
  theSeconds.style.transform = `rotate(${sec}deg)`;

  // MINUTE
  // 360 / 60 => 360 is the circle radius, there is 60 minutes in an hour
  // A
  // let m = new Date().getMinutes() * (360 / 60);
  // let min = Math.abs(180 + m);
  // console.log(`m: ${m}, min = ${min}`);

  // B
  let min = new Date().getMinutes();
  let minAngle = Math.abs(180 + new Date().getMinutes() * (360 / 60));
  console.log(`Minute: ${min}, MinuteAngle = ${minAngle}`);

  theMinutes.style.transform = `rotate(${minAngle}deg)`;

  // HOUR
  // % 12 => 24 hr notation in a day
  // A
  // let h = (new Date().getHours() % 12) * (360 / 12);
  // let hour = Math.abs(180 + h);
  // console.log(`h: ${h}, hour = ${hour}`);

  // B
  let hour = new Date().getHours();
  let hourAngle = Math.abs(180 + (new Date().getHours() % 12) * (360 / 12));
  console.log(`Hour: ${hour}, HourAngle = ${hourAngle}`);

  theHours.style.transform = `rotate(${hourAngle}deg)`;
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
