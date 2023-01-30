import { data } from "./data.js";

let input = document.querySelector(".header__input");
let gridEmoji = document.querySelector(".main__grid");

//Добавление одной карточки с эмодзи
const addCard = (symbol, title, keywords) => {
  let divEmoji = document.createElement("div");
  divEmoji.className = "grid__item item";

  let pSymbol = document.createElement("p");
  pSymbol.innerHTML = symbol;
  pSymbol.className = "item__symbol";
  divEmoji.append(pSymbol);

  let pTitle = document.createElement("h2");
  pTitle.innerHTML = title;
  pTitle.className = "item__title";
  divEmoji.append(pTitle);

  let pKeywords = document.createElement("p");
  pKeywords.innerHTML = [...new Set(keywords.split(" "))].join(" ");
  pKeywords.className = "item__keywords";
  divEmoji.append(pKeywords);

  gridEmoji.append(divEmoji);
};

//Добавление всех карточек
data.forEach((el) => addCard(el.symbol, el.title, el.keywords));

//Обработка введенной строки
const processingString = (str) => {
  let arr = str.trim().toLowerCase().split(" ");
  let outputArr = [];
  arr.forEach((el) => {
    if (!outputArr.includes(el) && el !== "") outputArr.push(el);
  });
  return outputArr;
};

//Обработка ввода текста в input
input.addEventListener("input", () => {
  let arrUniqueWords = processingString(input.value);
  console.log(arrUniqueWords);
  gridEmoji.innerHTML = "";
  data.forEach((elem) => {
    let stringKeys = elem.title + " " + elem.keywords;
    let countFinding = arrUniqueWords.reduce(
      (acc, cur) => acc + stringKeys.includes(cur),
      0
    );
    if (countFinding === arrUniqueWords.length)
      addCard(elem.symbol, elem.title, elem.keywords);
  });
  if (gridEmoji.innerHTML === "") addCard("🗙", "Not found", "");
});
