console.log(d3);

//Blog Page Elements:
document.addEventListener("DOMContentLoaded", () => {
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
  let navBtnPages = document.querySelectorAll(".nav-btn-pages");
  let navBtnActive = document.querySelector(".nav-btn-pages active");
  let tooltipPages = document.querySelector(".tooltip-pages-show");

  navBtnPages.forEach((navPage) => {
    navPage.addEventListener("mouseover", () => {
      tooltipPages.className = "tooltip-pages";
      for (i = 0; i < tabDetails.length; i++) {
        if (navPage.innerHTML === tabDetails[i].title) {
          tooltipPages.innerHTML = tabDetails[i].info;
        }
      }
    });
  });
});

navBtnPages.forEach((navPage) => {
  navPage.addEventListener("mouseleave", () => {
    for (i = 0; i < tabDetails.length; i++) {
      tooltipPages.className = "tooltip-pages-show";
    }
  });
});
