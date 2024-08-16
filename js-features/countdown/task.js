let counter = function () {
  if (+document.getElementById("timer") < 0) {
    alert("Вы победили в конкурсе");
    clearInterval(counter);
  }
};
setInterval(counter, 500);

document.addEventListener("DOMContentLoaded", counter());
