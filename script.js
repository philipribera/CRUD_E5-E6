/**************/
/*** SCRIPT ***/
/**************/
{
"use strict"

/*** ACHOR POINTS ***/
const showClock = document.querySelector(".show-clock");
const btnTime = document.querySelector(".btn-time");
const btnStop = document.querySelector(".btn-stop-time");
const btnReset = document.querySelector(".btn-reset");
const displayClock = document.querySelector(".display-clock");
const imgCarousel = document.querySelector(".img-carousel");
const userList = document.querySelector("user-list");

/*** LISTENERS ***/
btnTime.addEventListener("click", function() {
  // UGLY!!
  ClockGoing = setInterval(getTime, 10);
});

/*** CLOCK ***/
function startClock() {
  getTime();
}

function getTime() {
  displayClock.classList.remove("stopped-clock");
  displayClock.style.display = "initial";
  btnStop.classList.remove("btn-hd");
  btnStop.addEventListener("click", stopClock);
  btnReset.classList.remove("btn-hd");
  btnReset.addEventListener("click", resetClock);

  updateTime();
}

let updateTime = () => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let ms = time.getMilliseconds();

  if (ms > 99) {
    ms = (ms / 10).toFixed();
  } else {
    ms = ms;
  }

  let timeArr = [h, m, s, ms];

  let modifiedTimeDisplay = timeArr.map(unit => {
    return unit < 10 ? `0${unit}` : unit;
  });

  let [ho, mo, so, mso] = modifiedTimeDisplay;
  return (displayClock.innerText = `CLOCK: ${modifiedTimeDisplay.join(":")}`);
};

const stopClock = () => {
  displayClock.classList.add("stopped-clock");
  clearInterval(ClockGoing);
};

function resetClock() {
  displayClock.innerText = `CLOCK: 00:00:00:00`;
  clearInterval(ClockGoing);
}

/***    CAROUSEL    ***/

/*** ANCHORS ***/
const btnCarousel = document.querySelector(".btn-carousel");
const btnStopCarousel = document.querySelector(".btn-stop-carousel");
const imageCarousel = document.querySelector(".image-carousel");
const imageCarouselHd = document.querySelector(".image-carousel-hd");
const conImage = document.querySelector(".con-image");

/* IMAGES */
const img1 = "images/img1.jpg";
const img2 = "images/img2.jpg";
const img3 = "images/img3.jpg";
const img4 = "images/img4.jpg";
const images = [img1, img2, img3, img4];
let imgIndex = 0;

/*** LISTENERS ***/
btnCarousel.addEventListener("click", function() {
  setInterval(startCarousel, 2000);
});
btnStopCarousel.addEventListener("click", function() {
  conImage.style.opacity = "0.85";
  clearInterval(startCarousel);
});

function startCarousel() {
  imageCarousel.classList.remove("image-carousel-hd");
  conImage.src = images[imgIndex];

  if (imgIndex >= 3) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }
}


/***   REMOVE DUPLICATES   ***/

const set = [...new Set(["foo", "bar", "baz", "foo"])].sort();
const numberArr = ["1", "2", "333", "2", "44", "3", "2", "333"];

const newArr = numberArr.map(num => {
  return parseInt(num);
});

let str = "Hello World";
let str3 = new String("Hello Again!");
let str2 = str3.toUpperCase();

let obj = {
  name: "John",
  lastname: "Doe"
};

function test(...a) {
  console.log(Array.isArray(a));
  let result = 0;
  a.forEach(num => {
    result += num;
  });
  return result;
}

}