const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const delay = +counter.getAttribute("data-delay");

  console.log(delay);
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const number = +counter.innerText;

    const increment = target / 200;

    console.log(increment);

    if (number < target) {
      counter.innerText = `${Math.ceil(number + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  setTimeout(updateCounter, delay);
});
