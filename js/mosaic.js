apodUrl =
  "https://api.nasa.gov/planetary/apod?api_key=imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH&start_date=2023-09-27&end_date=2023-11-12";

//Create Dimensions
let HEIGHT = 1000;
let WIDTH = 1000;
let MARGIN = { top: 0, right: 500, bottom: -290, left: 380 };

let svg = d3
  .select("#mosaic")
  .append("svg")
  .attr("height", HEIGHT + MARGIN.bottom + MARGIN.top)
  .attr("width", WIDTH + MARGIN.left + MARGIN.right)
  .append("g")
  .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`)
  .style("padding-bottom", "-20rem");

d3.json(apodUrl).then((data) => {
  const numColumns = 9;
  const numRows = 5;

  const tileSize = Math.floor(WIDTH / numColumns + 18);

  data.forEach((d, i) => {
    if (d.media_type === "video") {
      return;
    }

    const col = i % numColumns;
    const row = Math.floor(i / numColumns);

    const x = col * tileSize;
    const y = row * tileSize;

    svg
      .append("image")
      .classed("mosaic-tile", true)
      .attr("id", `mos-${i}`)
      .attr("x", x)
      .attr("y", y)
      .attr("width", tileSize)
      .attr("height", tileSize)
      .attr("xlink:href", d.url)
      .attr("preserveAspectRatio", "xMidYMid slice");
  });

  d3.select("#mos-45").attr("x", 645).attr("y", 516);
  d3.select("#mos-46").attr("y", 387);
});
