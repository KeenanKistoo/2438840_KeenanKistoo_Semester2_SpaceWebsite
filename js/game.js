//Create Dimensions for SVG:
let HEIGHT = 700;
let WIDTH = 1000;
let MARGIN = { top: 50, right: 500, bottom: 60, left: 200 };

// Define the number of stars and the size range
const numberOfStars = 100; // You can adjust this number
const starSizeRange = [1, 3]; // Min and max star size

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

// Add Random Stars:
function CreateStars() {
  for (let i = 0; i < numberOfStars; i++) {
    const x = Math.random() * (WIDTH + MARGIN.left + MARGIN.right);
    const y = Math.random() * (HEIGHT + MARGIN.top + MARGIN.bottom);
    const size =
      Math.random() * (starSizeRange[1] - starSizeRange[0]) + starSizeRange[0]; // Random star size

    svg
      .append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", size)
      .attr("fill", "#fff"); // White fill for stars
  }
}

CreateStars();

//Adding Placeholder Heading:
svg
  .append("text") // Append a text element to the SVG
  .attr("x", 550) // X position of the text
  .attr("y", 100) // Y position of the text
  .text("Solar Flare Game") // The text content
  .classed("game-head", true)
  .attr("font-size", "3rem") // Font size
  .attr("fill", "white");

//Adding a rectangle for the instructions:
svg
  .append("rect")
  .attr("x", 300)
  .attr("y", 150)
  .attr("width", 900)
  .attr("height", 500)
  .attr("rx", 0)
  .attr("ry", 0)
  .style("fill", "black")
  .style("border-radius", 0);

//Adding instructions:
let text = svg
  .append("text")
  .attr("x", 120)
  .attr("y", 60)
  .attr("fill", "white")
  .classed("instructions", true);

text
  .append("tspan")
  .text("As an employee of NASA, it is your job to notify")
  .attr("x", 750)
  .attr("dy", 120)
  .style("text-anchor", "middle");

text
  .append("tspan")
  .text(
    " astronauts, air traffic control, AND/OR telecommunications services about solar flare activity"
  )
  .attr("x", 750)
  .attr("dy", 30)
  .style("text-anchor", "middle");
text
  .append("tspan")
  .text("if they are affected")
  .attr("x", 750)
  .attr("dy", 30)
  .style("text-anchor", "middle");

//Para 2
let text2 = svg
  .append("text")
  .attr("x", 120)
  .attr("y", 180)
  .attr("fill", "white")
  .classed("instructions", true);

text2
  .append("tspan")
  .text("You will be provided with the:")
  .attr("x", 750)
  .attr("dy", 120)
  .style("text-anchor", "middle");
text2
  .append("tspan")
  .text("- Start, Peak, End Time of the Solar Flare")
  .attr("x", 750)
  .attr("dy", 30)
  .style("text-anchor", "middle");
text2
  .append("tspan")
  .text("- Class Type")
  .attr("x", 750)
  .attr("dy", 30)
  .style("text-anchor", "middle");
text2
  .append("tspan")
  .text("- Geolocation")
  .attr("x", 750)
  .attr("dy", 30)
  .style("text-anchor", "middle");

//Para 3
let text3 = svg
  .append("text")
  .attr("x", 120)
  .attr("y", 320)
  .attr("fill", "white")
  .classed("instructions", true);

text3
  .append("tspan")
  .text(
    "Thanks to the technology of 1995, you simply press a button, select the hemisphere,"
  )
  .attr("x", 750)
  .attr("dy", 120)
  .style("text-anchor", "middle");
text3
  .append("tspan")
  .text("and submit before the timer runs out.")
  .attr("x", 750)
  .attr("dy", 30)
  .style("text-anchor", "middle");
text3
  .append("tspan")
  .text("If you get it correct, you gain a certain number of points")
  .attr("x", 750)
  .attr("dy", 80)
  .style("text-anchor", "middle")
  .classed("noti", true);
text3
  .append("tspan")
  .text("If you get it incorrect, you lose a certain number of points")
  .attr("x", 750)
  .attr("dy", 30)
  .style("text-anchor", "middle")
  .classed("noti", true);
text3
  .append("tspan")
  .text("Look at the example on the next page as a guide. GOOD LUCK!")
  .attr("x", 750)
  .attr("dy", 30)
  .style("text-anchor", "middle")
  .classed("noti", true);

// Create a group element for the button
const buttonGroup = svg.append("g");

// Create a rectangle as the button background
buttonGroup
  .append("rect")
  .attr("x", 750)
  .attr("y", 30)
  .attr("width", 200) // Adjust the width as needed
  .attr("height", 40) // Adjust the height as needed
  .attr("fill", "blue"); // Set the button color

// Create text for the button
buttonGroup
  .append("text")
  .attr("x", 775) // Adjust the x-coordinate for text positioning
  .attr("y", 55) // Adjust the y-coordinate for text positioning
  .text("Look at the example on the next page as a guide. GOOD LUCK!");

// Add click event handling for the button
buttonGroup.on("click", () => {
  // Add the action you want to perform when the button is clicked
  // For example, you can add a function to navigate to the next page.
});
