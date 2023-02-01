import { tempData } from "./script.js";
import { select } from "./globalVariable.js";
import { arrPagination } from "./renderPageButton.js";

//Обновление номеров страниц
export const changePageNumbering = (tempInd) => {
  let firstPageNumber;
  let pageInd;
  let countPage = Math.ceil(tempData.length / select.value);

  for (let elem of arrPagination) elem.className = "pagination__item";

  if (countPage > 5) {
    if (tempInd === 0) {
      firstPageNumber = 1;
      pageInd = 1;
    } else if (tempInd === 6) {
      firstPageNumber = countPage - 4;
      pageInd = 5;
    } else {
      firstPageNumber = +arrPagination[tempInd].innerHTML - 2;
      if (firstPageNumber < 1) firstPageNumber = 1;
      if (firstPageNumber + 4 > countPage) firstPageNumber = countPage - 4;
      if (firstPageNumber > 1 && firstPageNumber < countPage - 4) pageInd = 3;
      else pageInd = tempInd;
    }
  } else {
    firstPageNumber = 1;
    pageInd = tempInd;
  }

  for (let i = 0; i < 5 && i < countPage; i++) {
    arrPagination[i + (countPage > 5)].innerHTML = firstPageNumber + i;
  }
  arrPagination[pageInd].classList.add("pagination__item-active");
};
