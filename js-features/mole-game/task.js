let deadCounter = document.getElementById("dead");
let missCounter = document.getElementById("lost");

for (let i = 1; i < 10; ++i) {
  let id = "hole" + ("" + i);
  let elem = document.getElementById(id);
  console.log(elem);
  //console.log(deadCounter);
  elem.onclick = () => {
    if (elem.classList.contains("hole_has-mole")) {
      deadCounter.textContent++;
    } else {
      missCounter.textContent++;
    }
    if (+deadCounter.textContent === 10) {
      alert("Победа");
      deadCounter.textContent = 0;
      missCounter.textContent = 0;
    }
    if (+missCounter.textContent === 5) {
      alert("Проигрыш");
      deadCounter.textContent = 0;
      missCounter.textContent = 0;
    }
  };
}
