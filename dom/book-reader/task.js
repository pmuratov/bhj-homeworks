let fonts = document.querySelectorAll(".font-size");
let fontActive = document.querySelector(".font-size_active");
let books = document.getElementById("book");

fonts.forEach((elem) => {
  elem.addEventListener("click", fontChange);
});

function fontChange(i) {
  fontActive.classList.remove("font-size_active");
  this.classList.add("font-size_active");
  fontActive = this;
  if (this.getAttribute("data-size") === "small") {
    books.classList.add("book_fs-small");
    i.preventDefault();
  } else if (this.getAttribute("data-size") === "big") {
    books.classList.add("book_fs-big");
    books.classList.remove("book_fs-small");
    i.preventDefault();
  }
}
