//Create Dimensions:
let HEIGHT = 700;
let WIDTH = 1000;
let MARGIN = { top: 50, right: 500, bottom: 60, left: 200 };

//Create SVG:
let svg = d3
  .select("#game")
  .append("svg")
  .attr("height", HEIGHT + MARGIN.bottom + MARGIN.top)
  .attr("width", WIDTH + MARGIN.left + MARGIN.right)
  .append("g")
  .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`)
  .style("background-color", "#000");

//Black Background:
svg
  .append("rect")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("fill", "#000");

// // Create a group for your game content
// const g = svg
//   .append("g")
//   .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`);
