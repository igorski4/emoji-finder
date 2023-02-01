import { pagination } from "./globalVariable.js";
import { tempData } from "./script.js";
import { select } from "./globalVariable.js";
import { showPage } from "./showPage.js";
import { changePageNumbering } from "./changePageNumber.js";

export let arrPagination = document.querySelectorAll(".pagination__item");

export const renderPageButton = () => {
  let countPage = Math.ceil(tempData.length / select.value);
  console.log(countPage);
  console.log(tempData.length);
  console.log(select.value);
  pagination.innerHTML = "";

  if (countPage > 5)
    pagination.innerHTML = `<div class="pagination__item">First</div>`;

  for (let i = 0; i < 5 && i < countPage; i++)
    pagination.innerHTML += `<div class="pagination__item">${i + 1}</div>`;

  if (countPage > 5)
    pagination.innerHTML += `<div class="pagination__item">Last</div>`;

  arrPagination = document.querySelectorAll(".pagination__item");

  arrPagination.forEach((el, ind) => {
    el.addEventListener("click", () => {
      showPage(el.innerHTML);
      changePageNumbering(ind);
    });
  });

  arrPagination[0 + (countPage > 5)].classList.add("pagination__item-active");
};
