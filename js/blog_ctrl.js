let blogBtnOne = document.querySelector("#blog-btn-one");
blogBtnOne.addEventListener("click", () => {
  window.location.href = "#blog-one";
});

let blogBtnTwo = document.querySelector("#blog-btn-two");
blogBtnTwo.addEventListener("click", () => {
  window.location.href = "#blog-two";
});
let blogBtnThree = document.querySelector("#blog-btn-three");
blogBtnThree.addEventListener("click", () => {
  window.location.href = "#blog-three";
});

let blogSection = document.querySelector(".blog-post");

function FirstBlogPost() {
  blogSection.innerHTML = blogCode[0];
}

document.addEventListener("DOMContentLoaded", () => {
  //FirstBlogPost();
});
