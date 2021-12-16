"use strict";

// Grab elements to manipulate DOM
const colorName = document.getElementById("color-name");
const changeColorBtn = document.getElementById("change-color-btn");

// Array of colors
const colorArr = ["red", "orange", "yellow", "green", "blue", "purple"];

// On button click generate a random color
changeColorBtn.addEventListener("click", function () {
  let randomColorNumber = Math.floor(Math.random() * colorArr.length);
  console.log(randomColorNumber);
  let randomColor = colorArr[randomColorNumber];
  console.log(randomColor);

  colorName.textContent = colorName;
});
