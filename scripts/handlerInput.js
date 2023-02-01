import { processingString } from "./processingString.js";
import { newData } from "./script.js";
import { input, gridEmoji } from "./globalVariable.js";
import { addCard } from "./addCard.js";

//Поиск подходящих элементов и их вывод
export const handlerInput = () => {
  let filterData = [];
  let arrUniqueWords = processingString(input.value);
  gridEmoji.innerHTML = "";

  if (arrUniqueWords) {
    newData.forEach((elem) => {
      let stringKeys = elem.title + " " + elem.keywords;
      let countFinding = arrUniqueWords.reduce(
        (acc, cur) => acc + stringKeys.includes(cur),
        0
      );
      if (countFinding === arrUniqueWords.length) filterData.push(elem);
    });

    filterData.forEach((elem) => addCard(elem));
    if (gridEmoji.innerHTML === "") addCard("🗙", "Not found", "");
    return filterData;
  } else return newData;
};
