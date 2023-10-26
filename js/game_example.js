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
