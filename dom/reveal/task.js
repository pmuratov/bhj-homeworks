let paragraph = document.querySelectorAll(".reveal");

document.addEventListener("scroll", function () {
  for (let i of paragraph) {
    let { bottom } = i.getBoundingClientRect();
    if (bottom < window.innerHeight) {
      i.classList.add("reveal_active");
    } else {
      i.classList.remove("reveal_active");
    }
  }
});
