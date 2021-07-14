const jokeEl = document.getElementById("joke");
const jokeBtn = document.querySelector(".btn");

console.log(jokeBtn);

jokeBtn.addEventListener("click", generateJoke);

const config = {
  headers: {
    Accept: "application/json",
  },
};

generateJoke();

// function generateJoke() {
//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

async function generateJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
