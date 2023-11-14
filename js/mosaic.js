apodUrl =
  "https://api.nasa.gov/planetary/apod?api_key=imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH&start_date=2023-09-27&end_date=2023-11-12";

// Create Dimensions
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
//Creating Tooltip:
let tooltip = d3
  .select("#tooltip-day")
  .append("section")
  .style("opacity", 0)
  .style("width", "200px")
  .style("height", "20px")
  .style("border-radius", "5px")
  .style("padding", "2rem")
  .style("background-color", "#000")
  .style("color", "#fff")
  .style("position", "relative")
  .style("font-family", "'Manrope', sans-serif")
  .style("font-size", "0.9rem")
  .style("text-align", "center");
// Create a div for the text content
let textContainer = tooltip
  .append("div")
  .style("margin-top", "-22px")
  .style("margin-left", "-5px")
  .style("margin-right", "-5px");

function showTooltip(name) {
  tooltip.style("opacity", 1).style("height", "5px").style("z-index", 1000);

  // Add the text to the div
  textContainer.html(name + "<br>Click For More Info!");
}

function hideTooltip() {
  tooltip.style("opacity", 0).style("z-index", 1000);
  textContainer.html("");
  //console.log(tooltip.style("opacity"));
}

function moveTooltip() {
  tooltip
    .style("left", d3.pointer(event)[0] + 250 + "px")
    .style("top", d3.pointer(event)[1] - 875 + "px");
}

d3.json(apodUrl).then((data) => {
  console.log(data);
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

    const tile = svg
      .append("image")
      .classed("mosaic-tile", true)
      .attr("id", `mos-${i}`)
      .attr("x", x)
      .attr("y", y)
      .attr("width", tileSize)
      .attr("height", tileSize)
      .attr("xlink:href", d.url)
      .attr("preserveAspectRatio", "xMidYMid slice");

    tile.on("mouseover", function () {
      svg
        .selectAll(".mosaic-tile")
        .filter(":not(:hover)")
        .style("opacity", 0.75);
      d3.select(this)
        .attr("width", tileSize * 1.4)
        .attr("height", tileSize * 1.4);

      d3.select(this).raise();
      const hoveredId = d3.select(this).attr("id").slice(-1);
      const name = data[hoveredId].title;
      console.log(name);
      showTooltip(name);
    });

    tile.on("mouseout", function () {
      svg.selectAll(".mosaic-tile").style("opacity", 1);

      d3.select(this).attr("width", tileSize).attr("height", tileSize);
      hideTooltip();
    });

    tile.on("mousemove", () => {
      moveTooltip();
    });

    d3.select("#mos-45").attr("x", 645).attr("y", 516);
    d3.select("#mos-46").attr("y", 387);
  });
});
