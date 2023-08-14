console.log(d3);

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
  <button class="nav-btn-pages" id="test-id">Blog Section</button>
  <button class="nav-btn-pages">Design Section</button>
</section>
<section class="tooltip-pages"></section>
<div class="divider-line"></div>`;
}

function TestJS() {
  alert("this script is working");
}

let blogBtnPages = document.querySelector(".blog-btn-pages");

blogBtnPages.addEventListener("click", () => {
  window.location.href = "../html/blog.html";
});

let homeBtnPages = document.querySelector(".home-btn-pages");

homeBtnPages.addEventListener("click", () => {
  window.location.href = "../index.html";
});
let marsBtnPages = document.querySelector(".mars-btn-pages");

marsBtnPages.addEventListener("click", () => {
  window.location.href = "../html/mars.html";
});
let picBtnPages = document.querySelector(".pic-btn-pages");

picBtnPages.addEventListener("click", () => {
  window.location.href = "../html/daily-img.html";
});
let designBtnPages = document.querySelector(".design-btn-pages");

designBtnPages.addEventListener("click", () => {
  window.location.href = "../html/design.html";
});
let keplerBtnPages = document.querySelector(".kepler-btn-pages");

keplerBtnPages.addEventListener("click", () => {
  window.location.href = "../html/kepler-field.html";
});

//Blog Page Elements:
let heading = document.querySelector("h1");

if (heading.innerHTML === "Blog Section") {
  let blogBtnOne = document.querySelector("#blog-btn-one");
  blogBtnOne.addEventListener("click", () => {
    window.location.href = "#blog-one";
  });

  let blogBtnTwo = document.querySelector("#blog-btn-two");
  blogBtnTwo.addEventListener("click", () => {
    window.location.href = "#blog-two";
  });
}
