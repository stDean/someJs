const sizes = document.querySelectorAll(".size");
const colors = document.querySelectorAll(".color");
const shoes = document.querySelectorAll(".shoe");
const gradients = document.querySelectorAll(".gradient");
// const shoeBg = document.querySelector('.shoeBackground');

let prevColor = "blue";
let animationEnd = true;

// Changing the active state of the size
sizes.forEach((size) => {
  size.addEventListener("click", (e) => {
    sizes.forEach((size) => size.classList.remove("active"));
    e.target.classList.add("active");
  });
});

/**
 * get the primary and color attribute
 * get the shoe with a particular color
 * get the gradient with a particular color
 * prevGradient === gradient with blue color
 * change the active state
 * change all the "--primary" color to the primary queried
 * remove the show class and add it to the correct shoe
 * remove all the "first and second" class from the gradients
 * add "first"  class from the gradient
 * add "second"  class from the prevGradient i.e the color before the next color
 * set the prevGradient to color
 */
colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    if (!animationEnd) return;

    let primary = e.target.getAttribute("primary");
    let color = e.target.getAttribute("color");
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(
      `.gradient[color="${prevColor}"]`
    );

    // if color === prevColor don't do anything
    if (color == prevColor) return;

    colors.forEach((c) => c.classList.remove("active"));
    e.target.classList.add("active");

    document.documentElement.style.setProperty("--primary", primary);

    shoes.forEach((s) => s.classList.remove("show"));
    shoe.classList.add("show");

    gradients.forEach((g) => g.classList.remove("first", "second"));
    gradient.classList.add("first");
    prevGradient.classList.add("second");

    prevColor = color;
    animationEnd = false;

    // when animation ends set the animationEnd back true
    gradient.addEventListener("animationend", () => {
      animationEnd = true;
    });
  });
});
