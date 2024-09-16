const list = document.querySelector(".dropdown__list");

function action() {
  list.classList.toggle("dropdown__list_active");
}

const content = document.querySelector(".dropdown__value");
content.addEventListener("click", action);
const item = Array.from(document.querySelectorAll(".dropdown__item"));

item.forEach((elem, index) => {
  elem.onclick = () => {
    action();
    content.textContent = item[index].textContent;
    return false;
  };
});
