//Navigation Elements:

names = [
  "Blog Section",
  "Visual Marvel",
  "Design Section",
  "Kepler Field",
  "Mars",
];

//Navigation Bar:

let headingNav = document.querySelector(".header");
var num = headingNav.id;

document.addEventListener("DOMContentLoaded", () => {
  headingNav.innerHTML = `<section class="head-sect">
    <h1 class="main-head-pages">${names[num]}</h1>
  </section>
  <section class="nav-tabs-pages">
    <button class="nav-btn-pages home-btn-pages"">Homepage</button>
    <button class="nav-btn-pages mars-btn-pages">Mars</button>
    <button class="nav-btn-pages pic-btn-pages">Visual Marvel</button>
    <button class="nav-btn-pages kepler-btn-pages">Kepler Field</button>
    <button class="nav-btn-pages blog-btn-pages">Blog Section</button>
    <button class="nav-btn-pages design-btn-pages">Design Section</button>
  </section>
  <section class="tooltip-pages-show"></section>
  <div class="divider-line"></div>`;
});

document.addEventListener("DOMContentLoaded", () => {
  let home = document.querySelector(".home-btn-pages");
  let tooltip = document.querySelector(".tooltip-pages-show");

  home.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  home.addEventListener("mouseover", () => {
    tooltip.className = "tooltip-pages";
  });

  home.addEventListener("mouseout", () => {
    tooltip.className = "tooltip-pages-show";
  });
  let ast = document.querySelector(".mars-btn-pages");

  ast.addEventListener("click", () => {
    window.location.href = "../html/mars.html";
  });

  ast.addEventListener("mouseover", () => {
    tooltip.className = "tooltip-pages";
  });

  ast.addEventListener("mouseout", () => {
    tooltip.className = "tooltip-pages-show";
  });

  let picBtn = document.querySelector(".pic-btn-pages");

  picBtn.addEventListener("click", () => {
    window.location.href = "../html/daily-img.html";
  });

  picBtn.addEventListener("mouseover", () => {
    tooltip.className = "tooltip-pages";
  });

  picBtn.addEventListener("mouseout", () => {
    tooltip.className = "tooltip-pages-show";
  });

  let kep = document.querySelector(".kepler-btn-pages");

  kep.addEventListener("click", () => {
    window.location.href = "../html/kepler-field.html";
  });
  kep.addEventListener("mouseover", () => {
    tooltip.className = "tooltip-pages";
  });

  kep.addEventListener("mouseout", () => {
    tooltip.className = "tooltip-pages-show";
  });

  let blog = document.querySelector(".blog-btn-pages");

  blog.addEventListener("click", () => {
    window.location.href = "../html/blog.html";
  });
  blog.addEventListener("mouseover", () => {
    tooltip.className = "tooltip-pages";
  });

  blog.addEventListener("mouseout", () => {
    tooltip.className = "tooltip-pages-show";
  });

  let design = document.querySelector(".design-btn-pages");

  design.addEventListener("click", () => {
    window.location.href = "../html/design.html";
  });
  design.addEventListener("mouseover", () => {
    tooltip.className = "tooltip-pages";
  });

  design.addEventListener("mouseout", () => {
    tooltip.className = "tooltip-pages-show";
  });
});

//Navigation CSS for Active Page:

document.addEventListener("DOMContentLoaded", () => {
  let mainHead = document.querySelector("h1");
  let navBtnsCheck = document.querySelectorAll(".nav-btn-pages");

  for (i = 0; i < navBtnsCheck.length; i++) {
    if (mainHead.innerText === navBtnsCheck[i].innerHTML) {
      navBtnsCheck[i].classList.add("active");
    }
  }
});
