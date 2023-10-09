let metUrl =
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-10-03&end_date=2023-10-06&api_key=imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH";
let apiKey = "imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH";

//Create Dimensions
let HEIGHT = 700;
let WIDTH = 1000;
let MARGIN = { top: 50, right: 500, bottom: 60, left: 500 };

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

//console.log(`Today's date is ${formattedDate}`);

let date = ["2023-10-03", "2023-10-04", "2023-10-05"];
let index = 0;

let octThree = document.querySelector("#oct-three");
let octFour = document.querySelector("#oct-four");
let octFive = document.querySelector("#oct-five");

//Determine max and min scales and creating the axes:

d3.json(metUrl).then((data) => {
  let neo = data.near_earth_objects[date[index]];
  //console.log(neo);
  //console.log(neo[0]);

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
  let colourScale = d3
    .scaleOrdinal()
    .domain(["true", "false"])
    .range(["red", "green"]);

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
          .text("Absolute Magnitude (h)");
      });
  }
  createXAxis();
  createYAxis();
  //Creating tooltip
  let tooltip = d3
    .select("#tooltip")
    .append("section")
    .style("opacity", 1)
    .style("width", "200px")
    .style("height", "170px")
    .style("border-radius", "5px")
    .style("padding", "12px")
    .style("background-color", "#000")
    .style("color", "#fff")
    .style("position", "relative");

  //function to show and hide tooltip
  function showTooltip(d) {
    tooltip
      .transition()
      .duration(500)
      .style("opacity", 0.9)
      .style("left", d3.pointer(event)[0] + 340 + "px")
      .style("top", d3.pointer(event)[1] - 750 + "px")
      .style("font-family", "'Manrope', sans-serif");

    tooltip.html(
      "Name: " +
        d.name +
        "<br>h = " +
        d.absolute_magnitude_h +
        "<br> Min Est Diameter: " +
        d.estimated_diameter.kilometers.estimated_diameter_min.toFixed(4) +
        "km" +
        "<br> Max Est Diameter: " +
        d.estimated_diameter.kilometers.estimated_diameter_max.toFixed(4) +
        "km" +
        "<br> Miss Distance: " +
        d.close_approach_data[0].miss_distance.kilometers +
        "km"
    );
  }

  function hideTooltip() {
    tooltip.style("opacity", 0).style("z-index", 1000);
    //console.log(tooltip.style("opacity"));
  }

  function moveTooltip() {
    tooltip
      .style("left", d3.pointer(event)[0] + 340 + "px")
      .style("top", d3.pointer(event)[1] - 750 + "px");
  }
  //Creating bubbles
  function CreateBubbles(data) {
    svg
      .append("g")
      .selectAll(".bubbles")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", (d) => {
        return;
        "bubbles " + d.is_potentially_hazardous_asteroid;
      })
      .attr("cx", (d) =>
        xScale(d.close_approach_data[0].miss_distance.kilometers)
      )
      .attr("cy", (d) => yScale(d.absolute_magnitude_h))
      .attr("r", (d) =>
        rScale(d.estimated_diameter.kilometers.estimated_diameter_max * 10)
      )
      .style("fill", (d) => colourScale(d.is_potentially_hazardous_asteroid))
      .style("stroke", "#000")
      .style("stroke-width", "1px")
      .style("opacity", 0.7)
      .on("mouseover", (event, datum) => showTooltip(datum))
      .on("mousemove", (event, datum) => moveTooltip())
      .on("mouseout", (event, datum) => hideTooltip(event));

    console.log(data);
  }

  const myData = data.near_earth_objects[date[index]];
  CreateBubbles(myData);
  octThree.addEventListener("click", () => {
    svg.selectAll("circle").remove();
    index = 0;
    console.log("clicked");
    const myData = data.near_earth_objects[date[index]];
    CreateBubbles(myData);
  });
  octFour.addEventListener("click", () => {
    svg.selectAll("circle").remove();
    index = 1;
    const myData = data.near_earth_objects[date[index]];
    CreateBubbles(myData);
  });
  octFive.addEventListener("click", () => {
    svg.selectAll("circle").remove();
    index = 2;
    const myData = data.near_earth_objects[date[index]];
    CreateBubbles(myData);
  });

  //Create Key:
  let hazardous = ["True (Red)", "False (Green)"];
  function highlight(d) {
    d3.selectAll(".bubbles").style("opacity", 0.1);
    d3.selectAll("." + d).style("opacity", 1);
  }
  function removeHighlight(d) {
    d3.selectAll(".bubbles").style("opacity", 0.7);
  }

  function expandCircle(d) {
    d3.selectAll(".legend" + d)
      .transition()
      .duration(300)
      .attr("r", 17);
  }
  function shrinkCircle(d) {
    d3.selectAll(".legend" + d)
      .transition()
      .duration(300)
      .attr("r", 15);
  }
  const legendX = 1175;
  const legendY = 265;
  svg
    .append("text")
    .attr("x", legendX)
    .attr("y", legendY - 20)
    .style("fill", "#000")
    .style("font-size", "1rem")
    .text("Potentially Hazardous:");

  svg
    .append("g")
    .selectAll()
    .data(hazardous)
    .enter()
    .append("circle")
    .attr("class", (d) => "legend" + d)
    .attr("cx", 1225)
    .attr("cy", (d, i) => {
      return 280 + i * 35;
    })
    .attr("r", 15)
    .style("fill", (d) => colourScale(d))
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .on("mouseover", (event, datum) => highlight(datum))
    .on("mouseover", (event, datum) => expandCircle(datum))
    .on("mouseout", (event, datum) => removeHighlight(datum))
    .on("mouseout", (event, datum) => shrinkCircle(datum));

  svg
    .selectAll()
    .data(hazardous)
    .enter()
    .append("text")
    .attr("x", 1250)
    .attr("y", (d, i) => {
      return 285 + i * 35;
    })
    .style("fill", "#000")
    .text((d) => d);
});
