apodUrl =
  "https://api.nasa.gov/planetary/apod?api_key=imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH&start_date=2023-09-30&end_date=2023-11-12";

//Create Dimensions
let HEIGHT = 1000;
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

// d3.json(apodUrl).then((data) => {
//   console.log(data[0].url);
//   const tileSize = 140; // Adjust this value based on your desired size

//   // Calculate the number of columns dynamically based on the available width
//   const numColumns = Math.floor(WIDTH / tileSize);

//   data.forEach((d, i) => {
//     // Skip elements with YouTube videos
//     if (d.media_type === "video") {
//       return; // Skip this iteration of the loop
//     }

//     // Calculate adjusted index
//     let adjustedIndex = i;
//     if (i >= 24) {
//       adjustedIndex -= 2; // Skip elements at indices 24 and 37
//     }

//     const col = adjustedIndex % numColumns;
//     const row = Math.floor(adjustedIndex / numColumns);

//     // Assuming 'url' is a property in each data element
//     svg
//       .append("image")
//       .classed("mosaic-tile", true)
//       .attr("id", `mos-${adjustedIndex}`)
//       .attr("x", col * tileSize)
//       .attr("y", row * tileSize)
//       .attr("width", tileSize)
//       .attr("height", tileSize)
//       .attr("xlink:href", d.url);
//   });
// });

d3.json(apodUrl).then((data) => {
  const tileSize = Math.floor(WIDTH / 7); // Adjust this value based on your desired size

  data.forEach((d, i) => {
    if (d.media_type === "video") {
      return;
    }

    const col = i % 7;
    const row = Math.floor(i / 7);

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
});
