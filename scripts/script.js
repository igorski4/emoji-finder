import { createUniqueData } from "./createUniqueData.js";
import { select, input } from "./globalVariable.js";
import { handlerInput } from "./handlerInput.js";
import { handlerSelect } from "./handlerSelect.js";
import { showPage } from "./showPage.js";
import { renderPageButton } from "./renderPageButton.js";

export let newData = createUniqueData();
export let tempData = [...newData];

showPage();
renderPageButton();

select.addEventListener("change", () => {
  handlerSelect();
  renderPageButton();
});

input.addEventListener("input", () => {
  tempData = handlerInput();
  if (tempData.length !== 0) {
    renderPageButton();
    showPage();
  }
});
