const introLi = document.querySelector("#introLi");

const svgCross = document.querySelector("dialog svg");
const dialogIntro = document.querySelector("dialog#intro");
const articleGem = document.querySelector("article.gem");
const articleHero = document.querySelector("article.hero");
const articleNavbar = document.querySelector("article.navbar");

const hidePageContent = () => {
  articleGem.classList.add("hidden");
  articleHero.classList.add("hidden");
  articleNavbar.classList.add("hidden");
};

const showContent = () => {
  articleGem.classList.remove("hidden");
  articleHero.classList.remove("hidden");
  articleNavbar.classList.remove("hidden");
};

introLi.addEventListener("click", () => {
  hidePageContent();
  dialogIntro.showModal();
});

dialogIntro.addEventListener("close", () => {
  showContent();
});

svgCross.addEventListener("click", () => {
  dialogIntro.close();
});
