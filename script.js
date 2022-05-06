const leftButton = document.querySelector(".btn-left");
const rightButton = document.querySelector(".btn-right");
const articles = document.querySelectorAll("article");

let index = 0;

display(index);

function display(index) {
  articles.forEach((article) => {
    article.classList.remove("active");
  });
  articles[index].classList.add("active");
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = articles.length - 1;
  }
  display(index);
}

function nextSlide() {
  index++;
  if (index > articles.length - 1) {
    index = 0;
  }
  display(index);
}

leftButton.addEventListener("click", prevSlide);
rightButton.addEventListener("click", nextSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});
