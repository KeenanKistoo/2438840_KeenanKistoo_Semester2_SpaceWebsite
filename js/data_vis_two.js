const techUrl =
  "https://api.nasa.gov/DONKI/FLR?startDate=2023-07-01&endDate=2023-08-01&api_key=imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH";

d3.json(techUrl).then((data) => {
  console.log(data);

  const table = d3
    .select("#table-container")
    .append("table")
    .attr("class", "data-table");

  const thead = table.append("thead").attr("class", "headings");

  thead
    .append("tr")
    .selectAll("th")
    .data([
      "Active Region No.",
      "Begin Time",
      "Peak Time",
      "End Time",
      "Class Type",
    ])
    .enter()
    .append("th")
    .text((d) => d)
    .style("border", "1px black solid")
    .style("background-color", "lightgray")
    .style("font-weight", "bold")
    .style("text-transform", "uppercase")
    .style("padding", "3px");

  const tbody = table.append("tbody");
  const rows = tbody.selectAll("tr").data(data).enter().append("tr");

  const cells = rows
    .selectAll("td")
    .data((d) => [
      d.activeRegionNum,
      d.beginTime,
      d.peakTime,
      d.endTime,
      d.classType,
    ])
    .enter()
    .append("td")
    .text((d) => d)
    .style("border", "1px black solid")
    .style("padding", "10px")
    .style("text-align", "center");
});
