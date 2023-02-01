import { addCard } from "./addCard.js";
import { gridEmoji, select } from "./globalVariable.js";
import { tempData } from "./script.js";

//Отрисовка страницы
export const showPage = (numbPage = 1) => {
  let tempNumb =
    numbPage === "First"
      ? 0
      : numbPage === "Last"
      ? Math.ceil(tempData.length / select.value) - 1
      : +numbPage - 1;

  gridEmoji.innerHTML = "";

  tempData
    .slice(tempNumb * select.value, (tempNumb + 1) * select.value)
    .forEach((el) => addCard(el));
};
