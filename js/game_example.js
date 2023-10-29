/* ----------------------------------------------------------CREATING THE SVG-------------------------------------------------------------- */
let example = d3
  .select("#game-ex")
  .append("svg")
  .attr("height", HEIGHT + MARGIN.bottom + MARGIN.top)
  .attr("width", WIDTH + MARGIN.left + MARGIN.right)
  .append("g")
  .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`)
  .style("background-color", "#000");

//Black Background:
example
  .append("rect")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("fill", "#000");

// Add Random Stars:
function CreateStars() {
  for (let i = 0; i < numberOfStars; i++) {
    const x = Math.random() * (WIDTH + MARGIN.left + MARGIN.right);
    const y = Math.random() * (HEIGHT + MARGIN.top + MARGIN.bottom);
    const size =
      Math.random() * (starSizeRange[1] - starSizeRange[0]) + starSizeRange[0]; // Random star size

    example
      .append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", size)
      .attr("fill", "#fff"); // White fill for stars
  }
}

CreateStars();

/* ----------------------------------------------------------MAIN HEADING-------------------------------------------------------------- */
example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 550)
  .attr("y", 100)
  .text("Example Level")
  .classed("game-head", true)
  .attr("font-size", "4rem")
  .attr("fill", "white");

/* ----------------------------------------------------------TIMER ELEMENTS-------------------------------------------------------------- */
const timerTxt = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 1350)
  .attr("y", 100)
  .text("00")
  .classed("game-head", true)
  .attr("font-size", "5rem")
  .attr("fill", "white");

let maxTime = 30;
let time = maxTime;
//let timerInterval = setInterval(Timer, 1000);

function StartTimer() {}

function StopTimer() {
  clearInterval(timerInterval);
}

function Timer() {
  if (time % 2) {
    timerTxt.attr("fill", "red");
  } else {
    timerTxt.attr("fill", "white");
  }

  timerTxt.text(time);
  time--;
  console.log(time);
}

/* -----------------------------------------------------UI FOR THE LEFT HAND SIDE------------------------------------------------------- */
/*---------------------Backgrounds----------------------*/
example
  .append("rect")
  .attr("x", 60)
  .attr("y", 155)
  .attr("width", 400)
  .attr("height", 230)
  .attr("rx", 0)
  .attr("ry", 0)
  .style("fill", "black")
  .attr("stroke", "grey")
  .attr("stroke-width", 0.1);
example
  .append("rect")
  .attr("x", 500)
  .attr("y", 155)
  .attr("width", 400)
  .attr("height", 230)
  .attr("rx", 0)
  .attr("ry", 0)
  .style("fill", "black")
  .attr("stroke", "grey")
  .attr("stroke-width", 0.1);
example
  .append("rect")
  .attr("x", 60)
  .attr("y", 400)
  .attr("width", 400)
  .attr("height", 230)
  .attr("rx", 0)
  .attr("ry", 0)
  .style("fill", "black")
  .attr("stroke", "grey")
  .attr("stroke-width", 0.1);
example
  .append("rect")
  .attr("x", 500)
  .attr("y", 400)
  .attr("width", 400)
  .attr("height", 230)
  .attr("rx", 0)
  .attr("ry", 0)
  .style("fill", "black")
  .attr("stroke", "grey")
  .attr("stroke-width", 0.1);
/*-----------------Buttons and Information-------------------------- */
let astroBtn = example
  .append("circle")
  .attr("cx", 250)
  .attr("cy", 200)
  .attr("r", 30)
  .style("fill", "white")
  .attr("stroke", "grey")
  .attr("stroke-width", 10);
let astroHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 140)
  .attr("y", 270)
  .text("Astronaut Timeline:")
  .classed("game-head", true)
  .attr("font-size", "1.5rem")
  .attr("fill", "white");

let flightBtn = example
  .append("circle")
  .attr("cx", 700)
  .attr("cy", 200)
  .attr("r", 30)
  .style("fill", "white")
  .attr("stroke", "grey")
  .attr("stroke-width", 10);
let flightHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 590)
  .attr("y", 270)
  .text("Air Traffic Timeline:")
  .classed("game-head", true)
  .attr("font-size", "1.5rem")
  .attr("fill", "white");

let teleBtn = example
  .append("circle")
  .attr("cx", 250)
  .attr("cy", 450)
  .attr("r", 30)
  .style("fill", "white")
  .attr("stroke", "grey")
  .attr("stroke-width", 10);
let teleHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 100)
  .attr("y", 520)
  .text("Telecommunications Timeline:")
  .classed("game-head", true)
  .attr("font-size", "1.5rem")
  .attr("fill", "white");

let noneBtn = example
  .append("circle")
  .attr("cx", 700)
  .attr("cy", 450)
  .attr("r", 30)
  .style("fill", "white")
  .attr("stroke", "grey")
  .attr("stroke-width", 10);
let noneHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 630)
  .attr("y", 550)
  .text("Notify None")
  .classed("game-head", true)
  .attr("font-size", "1.5rem")
  .attr("fill", "white");
/* -----------------------------------------------------UI FOR THE RIGHT HAND SIDE------------------------------------------------------- */
/*---------------------Backgrounds----------------------*/
example
  .append("rect")
  .attr("x", 1000)
  .attr("y", 155)
  .attr("width", 400)
  .attr("height", 480)
  .attr("rx", 0)
  .attr("ry", 0)
  .style("fill", "black")
  .attr("stroke", "grey")
  .attr("stroke-width", 0.1);
/*-----------------Buttons and Information-------------------------- */
let northBtn = example
  .append("circle")
  .attr("cx", 1210)
  .attr("cy", 200)
  .attr("r", 30)
  .style("fill", "white")
  .attr("stroke", "grey")
  .attr("stroke-width", 10);
let northHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 1090)
  .attr("y", 270)
  .text("Northern Hemisphere")
  .classed("game-head", true)
  .attr("font-size", "1.5rem")
  .attr("fill", "white");

let southBtn = example
  .append("circle")
  .attr("cx", 1210)
  .attr("cy", 450)
  .attr("r", 30)
  .style("fill", "white")
  .attr("stroke", "grey")
  .attr("stroke-width", 10);
let southHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 1090)
  .attr("y", 550)
  .text("Southern Hemisphere")
  .classed("game-head", true)
  .attr("font-size", "1.5rem")
  .attr("fill", "white");
