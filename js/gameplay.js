let sfUrl = `https://api.nasa.gov/DONKI/FLR?startDate=2023-09-29&endDate=2023-10-28&api_key=imb3uQNJIXqz8tyBuMd7uSf4lgkqVrULlw2s6GCH`;

d3.json(sfUrl).then((data) => {
  console.log(data);
  let ranNum = Math.floor(Math.random() * data.length);
  //API DATA
  let beginTime = data[ranNum].beginTime.substring(11, 16);
  let finTime = data[ranNum].endTime.substring(11, 16);
  let classType = data[ranNum].classType;
  let source = data[ranNum].sourceLocation;

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
      text.text(script[Math.floor(Math.random() * script.length)] + finalTime);
    } else if (ran === 2) {
      finalTime = finTime;
      text.text(script[Math.floor(Math.random() * script.length)] + finalTime);
    }
    console.log(finalTime);
  }

  RandomEntry(astroText, astroScript);
  RandomEntry(flightText, flightScript);
  RandomEntry(telecomText, telecomScript);
});
