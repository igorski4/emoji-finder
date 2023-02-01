import { data } from "./data.js";

//Создание нового массива с уникальными keywords
export const createUniqueData = () => {
  let newArrData = [];
  data.forEach((el) => newArrData.push(el));
  for (let el of newArrData)
    el.keywords = [...new Set(el.keywords.split(" "))].join(" ");
  return newArrData;
};
