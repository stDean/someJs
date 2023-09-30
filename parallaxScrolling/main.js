// Dom Ref
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

// height of the header and section
let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener("scroll", () => {
  // get no of pixel by which you have scrolled up
  let scroll = window.pageYOffset;

  // 
  let sectionY = section.getBoundingClientRect();

  // Move the images and the big text as you scroll
  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  // increase the content and imageContainer div's opacity as you scroll down
  opacity.forEach((element) => {
    element.style.opacity = scroll / (sectionY.top + section_height);
  });

  // reduce the Big text opacity as you scroll down
  big_title.style.opacity = -scroll / (header_height / 2) + 1;

   // increase the shadow height on scroll
  shadow.style.height = `${scroll * 0.5 + 300}px`;

  content.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * 50 - 50
  }px)`;

  image_container.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -50 + 50
  }px)`;

  // increase the border width on scroll
  border.style.width = `${(scroll / (sectionY.top + section_height)) * 30}%`;
});
