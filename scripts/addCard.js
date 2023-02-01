import { gridEmoji } from "./globalVariable.js";

//Добавление одной карточки с эмодзи
export const addCard = (elem) => {
  let divEmoji = document.createElement("div");

  divEmoji.className = "grid__item item";
  divEmoji.innerHTML = `<p class="item__symbol">${elem.symbol}</p>
                        <h2 class="item__title">${elem.title}</h2>
                        <p class="item__keywords">${elem.keywords}</p>`;

  gridEmoji.append(divEmoji);
};
