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

/* ----------------------------------------------------------MAIN TEXT-------------------------------------------------------------- */
example
  .append("rect")
  .attr("x", 200)
  .attr("y", 10)
  .attr("width", 1000)
  .attr("height", 130)
  .attr("rx", 0)
  .attr("ry", 0)
  .style("fill", "black")
  .attr("stroke", "grey")
  .attr("stroke-width", 0.2);
example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 620)
  .attr("y", 35)
  .text("Solar Flare Data")
  .classed("game-head", true)
  .attr("font-size", "1.5rem")
  .attr("fill", "white");
example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 240)
  .attr("y", 73)
  .text("Begin Time")
  .classed("game-head", true)
  .attr("font-size", "1.3rem")
  .attr("fill", "white");
let beginTimeText = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 255)
  .attr("y", 110)
  .text("09:57")
  .classed("game-head", true)
  .attr("font-size", "1.6rem")
  .attr("fill", "white");

example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 505)
  .attr("y", 73)
  .text("End Time")
  .classed("game-head", true)
  .attr("font-size", "1.3rem")
  .attr("fill", "white");
let endTimeText = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 518)
  .attr("y", 110)
  .text("09:57")
  .classed("game-head", true)
  .attr("font-size", "1.6rem")
  .attr("fill", "white");

example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 755)
  .attr("y", 73)
  .text("Class Type")
  .classed("game-head", true)
  .attr("font-size", "1.3rem")
  .attr("fill", "white");
let classText = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 785)
  .attr("y", 110)
  .text("C1.1")
  .classed("game-head", true)
  .attr("font-size", "1.6rem")
  .attr("fill", "white");

example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 1000)
  .attr("y", 73)
  .text("Source Location")
  .classed("game-head", true)
  .attr("font-size", "1.3rem")
  .attr("fill", "white");
let sLocation = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 1034)
  .attr("y", 110)
  .text("SSSSSS")
  .classed("game-head", true)
  .attr("font-size", "1.6rem")
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
  .attr("stroke-width", 10)
  .on("mouseover", () => {
    astroBtn.style("fill", "rgb(125, 188, 125)").style("cursor", "pointer");
  })
  .on("mouseout", () => {
    ClickCheck(astroBtn);
  })
  .on("click", () => {
    ClassCheck(astroBtn);
    noneBtn.classed("clicked", false).style("fill", "white");
  });
let astroHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 155)
  .attr("y", 270)
  .text("Astronaut Timeline:")
  .classed("game-head", true)
  .attr("font-size", "1.2rem")
  .attr("fill", "white");

let flightBtn = example
  .append("circle")
  .attr("cx", 700)
  .attr("cy", 200)
  .attr("r", 30)
  .style("fill", "white")
  .attr("stroke", "grey")
  .attr("stroke-width", 10)
  .on("mouseover", () => {
    flightBtn.style("fill", "rgb(125, 188, 125)").style("cursor", "pointer");
  })
  .on("mouseout", () => {
    ClickCheck(flightBtn);
  })
  .on("click", () => {
    ClassCheck(flightBtn);
    noneBtn.classed("clicked", false).style("fill", "white");
  });
let flightHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 610)
  .attr("y", 270)
  .text("Air Traffic Timeline:")
  .classed("game-head", true)
  .attr("font-size", "1.2rem")
  .attr("fill", "white");

let teleBtn = example
  .append("circle")
  .attr("cx", 250)
  .attr("cy", 450)
  .attr("r", 30)
  .style("fill", "white")
  .attr("stroke", "grey")
  .attr("stroke-width", 10)
  .on("mouseover", () => {
    teleBtn.style("fill", "rgb(125, 188, 125)").style("cursor", "pointer");
  })
  .on("mouseout", () => {
    ClickCheck(teleBtn);
  })
  .on("click", () => {
    ClassCheck(teleBtn);
    noneBtn.classed("clicked", false).style("fill", "white");
  });
let teleHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 120)
  .attr("y", 520)
  .text("Telecommunications Timeline:")
  .classed("game-head", true)
  .attr("font-size", "1.2rem")
  .attr("fill", "white");

let noneBtn = example
  .append("circle")
  .attr("cx", 700)
  .attr("cy", 450)
  .attr("r", 30)
  .style("fill", "white")
  .attr("stroke", "grey")
  .attr("stroke-width", 10)
  .on("mouseover", () => {
    noneBtn.style("fill", "rgb(125, 188, 125)").style("cursor", "pointer");
  })
  .on("mouseout", () => {
    ClickCheck(noneBtn);
  })
  .on("click", () => {
    ClassCheck(noneBtn);
    astroBtn.classed("clicked", false).style("fill", "white");
    flightBtn.classed("clicked", false).style("fill", "white");
    teleBtn.classed("clicked", false).style("fill", "white");
  });
let noneHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 640)
  .attr("y", 550)
  .text("Notify None")
  .classed("game-head", true)
  .attr("font-size", "1.2rem")
  .attr("fill", "white");
/* -----------------------------------------------------Text Descriptions------------------------------------------------------- */
let astroText = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 150)
  .attr("y", 325)
  .text("")
  .classed("game-head", true)
  .attr("font-size", "1.2rem")
  .attr("fill", "white");
let flightText = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 623)
  .attr("y", 325)
  .text("")
  .classed("game-head", true)
  .attr("font-size", "1.2rem")
  .attr("fill", "white");
let telecomText = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 150)
  .attr("y", 595)
  .text("")
  .classed("game-head", true)
  .attr("font-size", "1.2rem")
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
  .attr("stroke-width", 10)
  .on("mouseover", () => {
    northBtn.style("fill", "rgb(125, 188, 125)").style("cursor", "pointer");
  })
  .on("mouseout", () => {
    ClickCheck(northBtn);
  })
  .on("click", () => {
    ClassCheck(northBtn);
    southBtn.classed("clicked", false).style("fill", "white");
  });
let northHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 1110)
  .attr("y", 270)
  .text("Northern Hemisphere")
  .classed("game-head", true)
  .attr("font-size", "1.2rem")
  .attr("fill", "white");

let southBtn = example
  .append("circle")
  .attr("cx", 1210)
  .attr("cy", 450)
  .attr("r", 30)
  .style("fill", "white")
  .attr("stroke", "grey")
  .attr("stroke-width", 10)
  .on("mouseover", () => {
    southBtn.style("fill", "rgb(125, 188, 125)").style("cursor", "pointer");
  })
  .on("mouseout", () => {
    ClickCheck(southBtn);
  })
  .on("click", () => {
    ClassCheck(southBtn);
    northBtn.classed("clicked", false).style("fill", "white");
  });
let southHeading = example
  .append("text")
  .attr("id", "timer-txt")
  .attr("x", 1110)
  .attr("y", 520)
  .text("Southern Hemisphere")
  .classed("game-head", true)
  .attr("font-size", "1.2rem")
  .attr("fill", "white");

function ClickCheck(button) {
  if (button.classed("clicked")) {
    button.style("fill", "green");
  } else {
    button.style("fill", "white");
  }
}

function ClassCheck(button) {
  if (button.classed("clicked")) {
    button.classed("clicked", false);
  } else {
    button.style("fill", "green");
    button.classed("clicked", true);
  }
}

astroScript = ["Maintenance @", "Earth Observation @", "Experiment @"];

flightScript = ["Departure @", "Landing @"];

telecomScript = ["Systems active @", "Maintenance @"];
