//Create Dimensions
let HEIGHT = 500;
let WIDTH = 800;
let MARGIN = { top: 50, right: 500, bottom: 50, left: 500 };
//Create SVG
let svg = d3
  .select("#meteor")
  .append("svg")
  .attr("height", HEIGHT + MARGIN.bottom + MARGIN.top)
  .attr("width", WIDTH + MARGIN.left + MARGIN.right)
  .append("g")
  .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`);
//Create scales/axes
let xScale = d3.scaleLinear().domain([0, 50000]).range([0, WIDTH]);
let yScale = d3.scaleLinear().domain([30, 90]).range([HEIGHT, 0]);
let rScale = d3.scaleSqrt().domain([150000, 1300000000]).range([2, 50]);

function createXAxis() {
  svg
    .append("g")
    .attr("transform", `translate(0, ${HEIGHT})`)
    .call(d3.axisBottom(xScale).ticks(2))
    .call((selection) => {
      selection
        .append("text")
        .attr("x", WIDTH / 2)
        .attr("y", MARGIN.bottom - 15)
        .style("fill", "#000")
        .style("font-size", "13px")
        .text("X Heading");
    });
}

function createYAxis() {
  svg
    .append("g")
    .call(d3.axisLeft(yScale))
    .call((selection) => {
      selection
        .append("text")
        .attr("x", -200)
        .attr("y", -40)
        .attr("transform", "rotate(-90)")
        .style("fill", "#000")
        .style("font-size", "13px")
        .text("Y Heading");
    });
}

createXAxis();
createYAxis();
//create tooltip

//create bubbles

//create legend

//implement
