//Обработка введенной строки
export const processingString = (str) => {
  let arr = str.trim().toLowerCase().split(" ");
  let outputArr = [];
  arr.forEach((el) => {
    if (!outputArr.includes(el) && el !== "") outputArr.push(el);
  });
  return outputArr;
};
