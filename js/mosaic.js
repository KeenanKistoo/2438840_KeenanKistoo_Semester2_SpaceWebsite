apodUrl =
  "https://api.nasa.gov/planetary/apod?api_key=imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH&start_date=2023-10-01&end_date=2023-11-11";

//Create Dimensions
let HEIGHT = 700;
let WIDTH = 1000;
let MARGIN = { top: 50, right: 500, bottom: 60, left: 500 };

//Create SVG
let svg = d3
  .select("#mosaic")
  .append("svg")
  .attr("height", HEIGHT + MARGIN.bottom + MARGIN.top)
  .attr("width", WIDTH + MARGIN.left + MARGIN.right)
  .append("g")
  .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`);

d3.json(apodUrl).then((data) => {
  console.log(data[24].url);
  data.forEach((d, i) => {
    // Assuming 'url' is a property in each data element
    svg
      .append("image")
      .classed("mosaic-tile", true)
      .attr("id", `mos-${i}`)
      .attr("x", (i % 7) * 100) // Adjust these values as needed for positioning
      .attr("y", Math.floor(i / 7) * 100) // Adjust these values as needed for positioning
      .attr("width", 100) // Adjust these values as needed for image size
      .attr("height", 100) // Adjust these values as needed for image size
      .attr("xlink:href", d.url);
  });
});
