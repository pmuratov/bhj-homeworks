let cookie = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
cookie.onclick = () => {
  if (counter.textContent === 0) {
    counter.textContent++;
  } else {
    counter.textContent++;
    if (counter.textContent % 2 === 0) {
      cookie.width *= 1.5;
      //      cookie.height *= 1.5;
    } else {
      cookie.width /= 1.5;
      //      cookie.height /= 1.5;
    }
  }
};
