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

let blogBtn = document.querySelector("#blog-btn");

blogBtn.addEventListener("click", () => {
  window.location.href = "../html/blog.html";
});
