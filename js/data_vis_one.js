let metUrl =
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-07&end_date=2023-09-08&api_key=imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH";
let apiKey = "imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH";

//Create Dimensions
let HEIGHT = 700;
let WIDTH = 1000;
let MARGIN = { top: 50, right: 500, bottom: 50, left: 500 };

//Create SVG
let svg = d3
  .select("#meteor")
  .append("svg")
  .attr("height", HEIGHT + MARGIN.bottom + MARGIN.top)
  .attr("width", WIDTH + MARGIN.left + MARGIN.right)
  .append("g")
  .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`);

//Determine Date:
const today = new Date();
const day = today.getDate() - 1;
const month = today.getMonth() + 1;
const year = today.getFullYear();

const formattedDate = `${year}-0${month}-0${day}`;

console.log(`Today's date is ${formattedDate}`);

//Determine max and min scales and creating the axes:

d3.json(metUrl).then((data) => {
  let neo = data.near_earth_objects["2023-09-08"];
  console.log(neo);
  console.log(neo[0]);

  let xMax = neo[0].close_approach_data[0].miss_distance.kilometers;
  let yMax = neo[0].absolute_magnitude_h;

  for (i = 1; i < neo.length; i++) {
    if (xMax < neo[i].close_approach_data[0].miss_distance.kilometers) {
      xMax = neo[i].close_approach_data[0].miss_distance.kilometers;
    }
  }

  for (i = 1; i < neo.length; i++) {
    if (yMax < neo[i].absolute_magnitude_h) {
      yMax = neo[i].absolute_magnitude_h;
    }
  }

  let xScale = d3.scaleLinear().domain([0, xMax]).range([0, WIDTH]);
  let yScale = d3
    .scaleLinear()
    .domain([0, yMax + 5])
    .range([HEIGHT, 0]);
  let rScale = d3.scaleSqrt().domain([0, 30]).range([2, 50]);

  function createXAxis() {
    svg
      .append("g")
      .attr("transform", `translate(0, ${HEIGHT})`)
      .call(d3.axisBottom(xScale).ticks(5))
      .call((selection) => {
        selection
          .append("text")
          .attr("x", WIDTH / 2)
          .attr("y", MARGIN.bottom - 15)
          .style("fill", "#000")
          .style("font-size", "1.5rem")
          .style("padding", "1rem")
          .text("Miss Distance (km)");
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
          .style("font-size", "1.5rem")
          .text("Absolute Magnitude");
      });
  }
  createXAxis();
  createYAxis();

  function CreateBubbles(data) {
    svg
      .append("g")
      .selectAll(".bubbles")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", (d) => {
        "bubbles " + d.is_potentially_hazardous_asteroid;
      })
      .attr("cx", (d) =>
        xScale(d.close_approach_data[0].miss_distance.kilometers)
      )
      .attr("cy", (d) => yScale(d.absolute_magnitude_h))
      .attr("r", (d) => rScale(d.absolute_magnitude_h))
      .style("fill", "#000")
      .style("stroke-width", "1px")
      .style("opacity", 0.7);
    console.log(data);
  }

  const myData = data.near_earth_objects["2023-09-07"];
  CreateBubbles(myData);
});
//create tooltip
