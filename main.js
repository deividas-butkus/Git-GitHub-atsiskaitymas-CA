const introLi = document.querySelector("#introLi");
const workLi = document.querySelector("#workLi");
const aboutLi = document.querySelector("#aboutLi");
const contactLi = document.querySelector("#contactLi");

const introSvgCross = document.querySelector("#intro > svg");
const workSvgCross = document.querySelector("#work > svg");
const aboutSvgCross = document.querySelector("#about > svg");
const contactSvgCross = document.querySelector("#contact > svg");

const dialogIntro = document.querySelector("dialog#intro");
const dialogWork = document.querySelector("dialog#work");
const dialogAbout = document.querySelector("dialog#about");
const dialogContact = document.querySelector("dialog#contact");
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

workLi.addEventListener("click", () => {
  hidePageContent();
  dialogWork.showModal();
});

aboutLi.addEventListener("click", () => {
  hidePageContent();
  dialogAbout.showModal();
});

contactLi.addEventListener("click", () => {
  hidePageContent();
  dialogContact.showModal();
});

dialogIntro.addEventListener("close", () => {
  showContent();
});

dialogWork.addEventListener("close", () => {
  showContent();
});

dialogAbout.addEventListener("close", () => {
  showContent();
});

dialogContact.addEventListener("close", () => {
  showContent();
});

introSvgCross.addEventListener("click", () => {
  dialogIntro.close();
});

workSvgCross.addEventListener("click", () => {
  dialogWork.close();
});

aboutSvgCross.addEventListener("click", () => {
  dialogAbout.close();
});

contactSvgCross.addEventListener("click", () => {
  dialogContact.close();
});
