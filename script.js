"use strict";

const btnAddItem = document.querySelector(".item-add");
const btnSubtractItem = document.querySelector(".item-subtract");
const itemNumber = document.querySelector(".item-number");

itemNumber.innerHTML = 0;

btnAddItem.addEventListener("click", () => {
	itemNumber.innerHTML++;
});

btnSubtractItem.addEventListener("click", () => {
	itemNumber.innerHTML--;
});
