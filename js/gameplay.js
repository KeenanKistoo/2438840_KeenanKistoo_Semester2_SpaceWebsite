let sfUrl = `https://api.nasa.gov/DONKI/FLR?startDate=2023-09-29&endDate=2023-10-28&api_key=imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH`;

d3.json(sfUrl).then((data) => {
  console.log(data);
  let ranNum = Math.floor(Math.random() * data.length);
  //API DATA
  let beginTime = data[ranNum].beginTime.substring(11, 16);
  let finTime = data[ranNum].endTime.substring(11, 16);
  let classType = data[ranNum].classType;
  let source = data[ranNum].sourceLocation;
  let score = 0;

  function SetData(text, genData) {
    text.text(genData);
  }
  SetData(beginTimeText, beginTime);
  SetData(endTimeText, finTime);
  SetData(classText, classType);
  SetData(sLocation, source);
  //DISPLAY DATA
  function RandomEntry(text, script) {
    let timeHours = "";
    let timeMins = "";
    let finalTime = "";

    let ran = Math.floor(Math.random() * 3);
    if (ran === 0) {
      timeHours = Math.floor(Math.random() * 24);
      timeMins = Math.floor(Math.random() * 60);
      if (timeHours < 10) {
        timeHours = "0" + timeHours;
      }
      if (timeMins < 10) {
        timeMins = "0" + timeMins;
      }
      finalTime = timeHours + ":" + timeMins;
      text.text(script[Math.floor(Math.random() * script.length)] + finalTime);
    } else if (ran === 1) {
      finalTime = beginTime;
      text
        .text(script[Math.floor(Math.random() * script.length)] + finalTime)
        .classed("corr", true);
    } else if (ran === 2) {
      finalTime = finTime;
      text
        .text(script[Math.floor(Math.random() * script.length)] + finalTime)
        .classed("corr", true);
    }
    console.log(finalTime);
  }

  RandomEntry(astroText, astroScript);
  RandomEntry(flightText, flightScript);
  RandomEntry(telecomText, telecomScript);

  function ChangeEntry(text, script, begTime, enTime) {
    let timeHours = "";
    let timeMins = "";
    let finalTime = "";

    let ran = Math.floor(Math.random() * 3);
    if (ran === 0) {
      timeHours = Math.floor(Math.random() * 24);
      timeMins = Math.floor(Math.random() * 60);
      if (timeHours < 10) {
        timeHours = "0" + timeHours;
      }
      if (timeMins < 10) {
        timeMins = "0" + timeMins;
      }
      finalTime = timeHours + ":" + timeMins;
      text.text(script[Math.floor(Math.random() * script.length)] + finalTime);
    } else if (ran === 1) {
      finalTime = begTime;
      text
        .text(script[Math.floor(Math.random() * script.length)] + finalTime)
        .classed("corr", true);
    } else if (ran === 2) {
      finalTime = enTime;
      text
        .text(script[Math.floor(Math.random() * script.length)] + finalTime)
        .classed("corr", true);
    }
    console.log(finalTime);
  }

  const timerTxt = example
    .append("text")
    .attr("id", "timer-txt")
    .attr("x", 1350)
    .attr("y", 100)
    .text("00")
    .classed("game-head", true)
    .attr("font-size", "5rem")
    .attr("fill", "white");

  const scoreTxt = example
    .append("text")
    .attr("id", "timer-txt")
    .attr("x", 50)
    .attr("y", 100)
    .text("00")
    .classed("game-head", true)
    .attr("font-size", "5rem")
    .attr("fill", "white");
  /* ----------------------------------------------------------TIMER ELEMENTS-------------------------------------------------------------- */
  let maxTime = 10;
  let time = maxTime;
  let value = 1000000;
  let timerInterval = setInterval(Timer, value);
  let gameSection = d3.select("#game-elements");

  let startBtn = gameSection
    .append("rect")
    .attr("x", 1250)
    .attr("y", 650)
    .attr("width", 200)
    .attr("height", 60)
    .classed("submit-btn", true)
    .attr("rx", 0)
    .attr("ry", 0)
    .style("fill", "white")
    .attr("stroke", "grey")
    .attr("stroke-width", 1)
    .on("mouseover", () => {
      startBtn.style("fill", "black").style("cursor", "pointer");
      submitHeading.style("fill", "white");
    });
  let submitHeading = gameSection
    .append("text")
    .attr("id", "timer-txt")
    .attr("x", 1320)
    .attr("y", 690)
    .text("Start Game")
    .classed("game-head", true)
    .attr("font-size", "1.2rem")
    .attr("fill", "white");

  function StartTimer() {
    let ranNum = Math.floor(Math.random() * 16);
    //console.log(ranNum);
    SetData(beginTimeText, data[ranNum].beginTime.substring(11, 16));
    SetData(endTimeText, data[ranNum].endTime.substring(11, 16));
    SetData(classText, data[ranNum].classType);
    SetData(sLocation, data[ranNum].sourceLocation);
    ChangeEntry(
      astroText,
      astroScript,
      beginTimeText,
      data[ranNum].beginTime.substring(11, 16),
      endTimeText,
      data[ranNum].endTime.substring(11, 16)
    );
    ChangeEntry(
      flightText,
      flightScript,
      data[ranNum].beginTime.substring(11, 16),
      endTimeText,
      data[ranNum].endTime.substring(11, 16)
    );
    ChangeEntry(
      telecomText,
      telecomScript,
      data[ranNum].beginTime.substring(11, 16),
      endTimeText,
      data[ranNum].endTime.substring(11, 16)
    );

    clearInterval(timerInterval);

    timerInterval = setInterval(Timer, 1000);
  }

  function StopTimer() {
    clearInterval(timerInterval);

    time = maxTime;
    Submit(astroBtn, astroText);
    Submit(flightBtn, flightText);
    Submit(teleBtn, telecomText);
    StartTimer();
  }

  function Timer() {
    time -= 1;
    if (time % 2) {
      timerTxt.attr("fill", "red");
    } else {
      timerTxt.attr("fill", "white");
    }

    timerTxt.text(time);

    if (time === 0) {
      //console.log("done");
      StopTimer();
    }
    ////console.log(time);
  }
  function Submit(btn, text) {
    if (btn.style("fill") === "green" && text.classed("corr")) {
      btn.style("fill", "white").classed("corr", false);
      console.log("+1");
      score += 1;
      scoreTxt.text(score);
    } else if (btn.style("fill") === "green" && !text.classed("corr")) {
      score -= 1;
      scoreTxt.text(score);
      console.log("-1");
      btn.style("fill", "white").classed("corr", false);
    }
  }
});
