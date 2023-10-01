const slider = document.querySelector(".slider");
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".img");
const options = document.querySelectorAll(".option");
const backgrounds = document.querySelectorAll('.bg');

var index = 1;
var op_index = 0;
var size = slides[index].clientWidth;

update();

/**
 * transform the correct image when the index changes (transform: translate(-800 * 1px))
 * remove the "colored" class from all option
 * add the colored class to the option with the correct image
 * remove "show" class from all background
 * add 'show' class to the bg for each image
 */
function update() {
  slider.style.transform = `translateX(${-size * index}px)`;

  options.forEach((option) => option.classList.remove("colored"));
  options[op_index].classList.add("colored");

  backgrounds.forEach(img => img.classList.remove('show'));
	backgrounds[op_index].classList.add('show');
}

// slide transition
function slide() {
  slider.style.transition = "transform .5s ease-in-out";
  update();
}

// Move images
const btnClicked = (e) => {
  switch (e.target.id) {
    case "prev":
      index--;
      if (op_index === 0) {
        op_index = 6;
      } else {
        op_index--;
      }
      break;
    case "next":
      index++;
      if (op_index === 6) {
        op_index = 0;
      } else {
        op_index++;
      }
      break;
  }
  slide();
};

/**
 * @param {*} e
 * get the "op-index" attribute from each option
 * increase the index by 1 when clicked
 * slide!!
 */
const optionFunc = (e) => {
  let i = Number(e.target.getAttribute("op-index"));
  op_index = i;
  index = i + 1;
  slide();
};

slider.addEventListener("transitionend", () => {
  // if slide id === last go to the image @ index 7 in the array
  if (slides[index].id === "last") {
    slider.style.transition = "none";
    index = slides.length - 2;
    slider.style.transform = "translateX(" + -size * index + "px)";
  } else if (slides[index].id === "first") {
    // if slide id === last go to the image @ index 1 in the array
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = "translateX(" + -size * index + "px)";
  }
});

btns.forEach((btn) => {
  btn.addEventListener("click", btnClicked);
});

options.forEach((option) => option.addEventListener("click", optionFunc));
