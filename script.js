"use strict";

const btnAddItem = document.querySelector(".item-add");
const btnSubtractItem = document.querySelector(".item-subtract");
const itemNumber = document.querySelector(".item-number");

itemNumber.innerHTML = 0;

function itemAction(action) {
	if (action === "subtract") {
		if (itemNumber.innerHTML > 0) {
			itemNumber.innerHTML--;
		}
	} else if (action === "add") {
		itemNumber.innerHTML++;
	} else {
		alert("Unkown action performed!, Please try again.");
	}
}

btnAddItem.addEventListener("click", () => {
	itemAction("add");
});

btnSubtractItem.addEventListener("click", () => {
	itemAction("subtract");
});
