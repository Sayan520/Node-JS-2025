// create random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// global scope for reuse
let interValId;

// setInterval
let startChangingColor = function () {
  // console.log(randomColor())
  let changeColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if (!interValId) {
    interValId = setInterval(changeColor, 1000);
  }
};

// clearInterval
let stopChangingColor = function () {
  clearInterval(interValId);
  interValId = null;
};

// start color by click event
document.getElementById("start").addEventListener("click", startChangingColor);

// stop color by click event
document.getElementById("stop").addEventListener("click", stopChangingColor);
