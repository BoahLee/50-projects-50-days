const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  console.log(window.innerHeight);

  const inView = (window.innerHeight / 5) * 4.5;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);

    if (inView > boxTop) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
