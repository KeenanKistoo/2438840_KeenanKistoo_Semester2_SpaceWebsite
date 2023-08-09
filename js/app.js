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

//Generate the navigation bar:
let header = document.querySelector(".header");
function SetNavBar(count) {
  header.innerHTML = `<section class="head-sect">
  <h1 class="main-head-pages">${tabDetails[count].title}</h1>
</section>
<section class="nav-tabs-pages">
  <button class="nav-btn-pages">Homepage</button>
  <button class="nav-btn-pages">Mars</button>
  <button class="nav-btn-pages">Visual Marvel</button>
  <button class="nav-btn-pages">Kepler Field</button>
  <button class="nav-btn-pages active">Blog Section</button>
  <button class="nav-btn-pages">Design Section</button>
</section>
<section class="tooltip-pages"></section>
<div class="divider-line"></div>`;
}

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

function TestJS() {
  alert("this script is working");
}
