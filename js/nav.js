//Navigation Bar:

let headingNav = document.querySelector(".header");
document.addEventListener("DOMContentLoaded", () => {
  headingNav.innerHTML = `<section class="head-sect">
    <h1 class="main-head-pages">Picture Of The Day</h1>
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
});
