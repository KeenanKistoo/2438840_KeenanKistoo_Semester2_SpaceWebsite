let blogSection = document.querySelector("#blog-posts");
let blogBtnOne = document.querySelector("#blog-btn-one");
let index = 0;
document.addEventListener("DOMContentLoaded", () => {
  FirstBlogPost();
});
blogBtnOne.addEventListener("click", () => {
  blogSection.innerHTML = blogCode[0];
  index = 0;
  MoveWindow();
});

let blogBtnTwo = document.querySelector("#blog-btn-two");
blogBtnTwo.addEventListener("click", () => {
  blogSection.innerHTML = blogCode[1];
  index = 1;
  MoveWindow();
});
let blogBtnThree = document.querySelector("#blog-btn-three");
blogBtnThree.addEventListener("click", () => {
  blogSection.innerHTML = blogCode[2];
  index = 2;
  MoveWindow();
});
let blogBtnFour = document.querySelector("#blog-btn-four");
blogBtnFour.addEventListener("click", () => {
  blogSection.innerHTML = blogCode[3];
  index = 3;
  MoveWindow();
});

function FirstBlogPost() {
  blogSection.innerHTML = blogCode[0];
  //console.log(index);
}

let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");
let topBtn = document.querySelector("#top-btn");

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    blogSection.innerHTML = blogCode[index];
    MoveWindow();
  }
});
nextBtn.addEventListener("click", () => {
  if (index < 3) {
    index++;
    blogSection.innerHTML = blogCode[index];
    MoveWindow();
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function MoveWindow() {
  window.scrollTo({
    top: 543,
    behavior: "smooth",
  });
}
