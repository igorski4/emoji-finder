import { data } from "./data.js";

let input = document.querySelector(".header__input");
// let title = document.querySelector(".header__title");
// input.addEventListener("input", () => (title.innerHTML = input.value));

for (let el of data) {
  let divEmoji = document.createElement("div");
  divEmoji.className = "grid__item item";

  let pSymbol = document.createElement("p");
  pSymbol.innerHTML = el.symbol;
  pSymbol.className = "item__symbol";
  divEmoji.append(pSymbol);

  let pTitle = document.createElement("h2");
  pTitle.innerHTML = el.title;
  pTitle.className = "item__title";
  divEmoji.append(pTitle);

  let pKeywords = document.createElement("p");
  pKeywords.innerHTML = el.keywords;
  pKeywords.className = "item__keywords";
  divEmoji.append(pKeywords);

  let gridEmoji = document.querySelector(".main__grid");
  gridEmoji.append(divEmoji);
}
