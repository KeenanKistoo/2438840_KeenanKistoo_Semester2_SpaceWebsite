console.log(d3);

//Homepage Button Hover:
let navBtns = document.querySelectorAll(".nav-btn");
let tooltipHome = document.querySelector(".tooltip-home");

navBtns.forEach((navBtn) => {
  navBtn.addEventListener("mouseover", () => {
    tooltipHome.className = "tooltip-home-show";
    for (i = 0; i < homeTooltips.length; i++) {
      if (navBtn.innerHTML === homeTooltips[i].heading) {
        tooltipHome.innerHTML = homeTooltips[i].tooltipText;
      }
    }
  });
});

navBtns.forEach((navBtn) => {
  navBtn.addEventListener("mouseleave", () => {
    tooltipHome.className = "tooltip-home";
    tooltipHome.innerHTML = "";
  });
});

//Homepage Navigation:
let blogBtn = document.querySelector("#blog-btn");

blogBtn.addEventListener("click", () => {
  window.location.href = "html/blog.html";
});
let marsBtn = document.querySelector("#mars-btn");

marsBtn.addEventListener("click", () => {
  window.location.href = "html/mars.html";
});
let picBtn = document.querySelector("#pic-btn");

picBtn.addEventListener("click", () => {
  window.location.href = "html/daily-img.html";
});
let designBtn = document.querySelector("#design-btn");

designBtn.addEventListener("click", () => {
  window.location.href = "html/design.html";
});
let keplerBtn = document.querySelector("#kepler-btn");

keplerBtn.addEventListener("click", () => {
  window.location.href = "html/kepler-field.html";
});
