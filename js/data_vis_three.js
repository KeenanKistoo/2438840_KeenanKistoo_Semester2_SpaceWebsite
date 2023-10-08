//set dimensions
let HEIGHT = 700;
let WIDTH = 1000;
let MARGIN = { top: 50, right: 500, bottom: 150, left: 500 };

//create barGraph
let barGraph = d3
  .select("#bar-graph")
  .append("svg")
  .attr("height", HEIGHT + MARGIN.bottom + MARGIN.top)
  .attr("width", WIDTH + MARGIN.left + MARGIN.right)
  .append("g")
  .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`);

d3.json(techUrl).then((data) => {
  let barData = [
    { className: "C", value: 0 },
    { className: "M", value: 0 },
    { className: "X", value: 0 },
  ];
  let m = 0;
  let x = 0;
  let c = 0;
  for (i = 0; i < data.length; i++) {
    let classType = data[i].classType.charAt(0);

    if (classType == "M") {
      m++;
      barData[0].value++;
    } else if (classType == "C") {
      c++;
      barData[1].value++;
    }
    if (classType == "X") {
      x++;
      barData[2].value++;
    }
  }
  console.log("C:", barData[0].value);
  console.log("M:", barData[1].value);
  console.log("X:", barData[2].value);

  //Create Scales:
  let letters = ["C", "M", "X"];
  let barWidth = 250; // Adjust the desired width of the bars
  let padding = 25; // Adjust the padding between bars

  // Calculate the total width needed for all bars and padding
  let totalWidth = letters.length * (barWidth + padding);

  let xScale = d3
    .scaleBand()
    .domain(letters)
    .range([0, totalWidth]) // Adjust the range based on the total width
    .paddingInner(padding / totalWidth); // Add padding between bars

  let yScale = d3
    .scaleLinear()
    .domain([0, d3.max(barData, (d) => d.value + 10)])
    .range([HEIGHT, 0]);
  let rScale = d3.scaleSqrt().domain([0, 30]).range([2, 50]);

  function createXAxis() {
    barGraph
      .append("g")
      .attr("transform", `translate(0, ${HEIGHT})`)
      .call(d3.axisBottom(xScale).ticks(4))
      .call((selection) => {
        selection
          .append("text")
          .attr("x", WIDTH / 2)
          .attr("y", MARGIN.bottom + 50)
          .style("fill", "#000")
          .style("font-size", "1.8rem")
          .style("padding", "1rem")
          .text("Working");
      });
  }

  function createYAxis() {
    barGraph
      .append("g")
      .call(d3.axisLeft(yScale))
      .call((selection) => {
        selection
          .append("text")
          .attr("x", -200)
          .attr("y", -40)
          .attr("transform", "rotate(-90)")
          .style("fill", "#000")
          .style("font-size", "1.8rem")
          .text("Absolute Magnitude");
      });
  }
  createXAxis();
  createYAxis();

  // Create bars:
  barGraph
    .append("g")
    .attr("fill", "black")
    .selectAll("rect")
    .data(barData)
    .join("rect")
    .attr("x", (d) => xScale(d.className)) // Use xScale to position bars
    .attr("y", (d) => yScale(d.value)) // Use yScale to position bars
    .attr("width", barWidth) // Set the width based on bandwidth
    .attr("height", (d) => HEIGHT - yScale(d.value)); // Calculate the height based on data value

  barGraph.node();
});
