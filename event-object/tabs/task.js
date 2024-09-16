let tab = document.querySelectorAll(".tab");
let tabActive = document.querySelector(".tab_active");
let tabContent = document.querySelectorAll(".tab__content");

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", activator);
}

function activator() {
  tabActive.classList.remove("tab_active");
  tabActive = this;
  this.classList.add("tab_active");
  let indexTab = [...tab].findIndex((obj) =>
    obj.classList.contains("tab_active")
  );
  let indexContent = [...tabContent].findIndex((obj) =>
    obj.classList.contains("tab__content_active")
  );
  tabContent[indexContent].classList.remove("tab__content_active");
  tabContent[indexTab].classList.add("tab__content_active");
}
