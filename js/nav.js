//Navigation Elements:

names = [
  "Blog Section",
  "Mini Game",
  "Design Section",
  "Solar Flares",
  "Asteroids",
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
    <button class="nav-btn-pages mars-btn-pages">Asteroids</button>
    <button class="nav-btn-pages pic-btn-pages">Mini Game</button>
    <button class="nav-btn-pages kepler-btn-pages">Solar Flares</button>
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
    window.location.href = homeUrl;
  });
  let ast = document.querySelector(".mars-btn-pages");

  ast.addEventListener("click", () => {
    window.location.href = marsUrl;
  });
  let picBtn = document.querySelector(".pic-btn-pages");

  picBtn.addEventListener("click", () => {
    window.location.href = picUrl;
  });

  let kep = document.querySelector(".kepler-btn-pages");

  kep.addEventListener("click", () => {
    window.location.href = kepUrl;
  });
  let blog = document.querySelector(".blog-btn-pages");

  blog.addEventListener("click", () => {
    window.location.href = blogUrl;
  });
  let design = document.querySelector(".design-btn-pages");

  design.addEventListener("click", () => {
    window.location.href = designUrl;
  });
  let navBtns = document.querySelectorAll(".nav-btn-pages");
  navBtns.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      //console.log("over");
    });

    btn.addEventListener("mouseout", () => {
      //console.log("out");
    });
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

//Navigation Scroll

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    let mainHead = document.querySelector(".main-head-pages");
    let navTabScroll = document.querySelector(".nav-tabs-pages");
    let navBtnScroll = document.querySelectorAll(".nav-btn-pages");
    let divLine = document.querySelector(".divider-line");

    mainHead.classList.toggle("head-scroll", window.scrollY > 0);
    navTabScroll.classList.toggle("page-scroll", window.scrollY > 0);
    divLine.classList.toggle("div-scroll", window.scrollY > 0);
    navBtnScroll.forEach((btn) => {
      btn.classList.toggle("btn-scroll", window.scrollY > 0);
    });
  });
});

//Footer elements:
document.addEventListener("DOMContentLoaded", () => {
  let footer = document.querySelector(".footer");
  footer.innerHTML = `<section class="footer-elements">
  <ul>
    <a href="../index.html" class="foot-links">Homepage</a
    ><a href="../html/mars.html" class="foot-links">Asteroids</a
    ><a href="../html/daily-img.html" class="foot-links">Mini Game</a
    ><a href="../html/kepler-field.html" class="foot-links"
      >Solar Flares</a
    ><a href="../html/blog.html" class="foot-links">Blog Section</a
    ><a href="../html//design.html" class="foot-links"
      >Design
      <section></section
    ></a>
  </ul>
</section>`;
});
