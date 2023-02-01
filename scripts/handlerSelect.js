import { gridEmoji, select } from "./globalVariable.js";
import { addCard } from "./addCard.js";
import { tempData } from "./script.js";

//Изменение количества карточек
export const handlerSelect = () => {
  gridEmoji.innerHTML = "";

  for (let i = 0; i < select.value && i < tempData.length; i++) {
    addCard(tempData[i]);
  }
};
