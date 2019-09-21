/*************************/
/***   BUBBLE SCRIPT   ***/
/*************************/

"use strict";

class Bubble {
  constructor(_Xposition, _Yposition, _Radius, _Color) {
    let defaultParameters = GenerateBubble.defaultGenerator();    
    let [x,y,rad,rgb] = defaultParameters;
    let [r, g, b] = rgb;        
    this.x = _Xposition || x;
    this.y = _Yposition || y;
    this.r = _Radius || rad;
    this.c = _Color || `rgb(${r},${g},${b})`;
  }
}

class GenerateBubble {
  static generate(newBubble) {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    ctx.webkitImageSmoothingEnabled = true;
    ctx.beginPath();
    ctx.arc(newBubble.x, newBubble.y, newBubble.r, 0, 2 * Math.PI, false);
    ctx.fillStyle = newBubble.c;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = newBubble.c;
    ctx.stroke();
  }

  static defaultGenerator() {
    let xDefault = 20 + Math.floor(Math.random() * 260);
    let yDefault = 10 + Math.floor(Math.random() * 130);
    let rDefault = Math.floor(Math.random() * 20);        
    let clrDefault = [0,0,0];
    let clrDef = clrDefault.map((item)=> {
      return item = Math.floor(Math.random() * 255);                
    })      
    const defaultValues = [xDefault, yDefault, rDefault, clrDef];    
    return defaultValues;
  }
}

/* ANCHORS */
const myForm = document.querySelector("#my-form");

/* LISTENERS */
myForm.addEventListener("submit", getInput);

// Get input
function getInput(e) {
  e.preventDefault();
  const inputData = document.querySelectorAll(".input-data");
  const inputArray = [];
  const inColor = document.querySelector(".in-color");

  if (inColor.addEventListener("change", addColorProperty)) {
    Array.from(inputData, input => {
      inputArray.push(input.value);
    });
  } else {
    Array.from(inputData, input => {
      if (input.value !== "#000000") {
        inputArray.push(input.value);
      }
    });
  }
  // We create an instance of the circle class
  createBubble(inputArray);
}

//
function addColorProperty() {}

// Instantiate the circle object
const createBubble = inputValues => {
  let bubbleQuantity = 5;
  for (let i = 0; i < bubbleQuantity; i++) {
    let newBubble = new Bubble(...inputValues);
    GenerateBubble.generate(newBubble);
  }
};
