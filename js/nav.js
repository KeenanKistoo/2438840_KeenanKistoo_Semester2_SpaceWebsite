//Navigation Bar:

let headingNav = document.querySelector(".header");
document.addEventListener("DOMContentLoaded", () => {
  headingNav.innerHTML = `<section class="head-sect">
    <h1 class="main-head-pages">Blog Section</h1>
  </section>
  <section class="nav-tabs-pages">
    <button class="nav-btn-pages home-btn-pages"">Homepage</button>
    <button class="nav-btn-pages mars-btn-pages">Mars</button>
    <button class="nav-btn-pages active pic-btn-pages">
      Visual Marvel
    </button>
    <button class="nav-btn-pages kepler-btn-pages">Kepler Field</button>
    <button class="nav-btn-pages blog-btn-pages">Blog Section</button>
    <button class="nav-btn-pages design-btn-pages">Design Section</button>
  </section>
  <section class="tooltip-pages-show"></section>
  <div class="divider-line"></div>`;
});

document.addEventListener("DOMContentLoaded", () => {
  let home = document.querySelector(".home-btn-pages");

  home.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
  let ast = document.querySelector(".mars-btn-pages");

  ast.addEventListener("click", () => {
    window.location.href = "../html/mars.html";
  });

  let picBtn = document.querySelector(".pic-btn-pages");

  picBtn.addEventListener("click", () => {
    window.location.href = "../html/daily-img.html";
  });

  let kep = document.querySelector(".kepler-btn-pages");

  kep.addEventListener("click", () => {
    window.location.href = "../html/kepler-field.html";
  });

  let blog = document.querySelector(".blog-btn-pages");

  blog.addEventListener("click", () => {
    window.location.href = "../html/blog.html";
  });

  let design = document.querySelector(".design-btn-pages");

  design.addEventListener("click", () => {
    window.location.href = "../html/blog.html";
  });
});
