let deadCounter = document.getElementById("dead").textContent;
let missCounter = document.getElementById("lost").textContent;

for (let i = 0; ++i; i < 10) {
  let id = "hole" + ("" + i);
  let elem = document.getElementById(id);
  console.log(elem);
  //console.log(deadCounter);
  elem.onclick = () => {
    if (elem.classList.contains("hole_has-mole")) {
      deadCounter++;
    } else {
      missCounter++;
    }
    if (deadCounter === 10) {
      alert("Победа");
      deadCounter = 0;
      missCounter = 0;
    }
    if (missCounter === 5) {
      alert("Проигрыш");
      deadCounter = 0;
      missCounter = 0;
    }
  };
}
