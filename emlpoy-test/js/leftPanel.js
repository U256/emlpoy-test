"use strict";
import { indexOfElem } from "./indexOfElement.js";

document
  .querySelector(".left-panel__switcher")
  .addEventListener("click", () => {
    document.querySelector(".left-panel").classList.toggle("left-panel_active");
  });

let toBlockButtonsArray = document.querySelectorAll(".left-panel__button");
let blocksArray = document.querySelectorAll(".prim-block");
let toBlockButtonsContainer = document.querySelector(
  ".left-panel__toblock-btns-chunk"
);

toBlockButtonsContainer.addEventListener("click", function (e) {
  if (e.target.hasAttribute("type")) {
    //avoid click between btns (clicking on background)

    toBlockButtonsArray.forEach((toBlockBtn) => {
      toBlockBtn.classList.remove("left-panel__button_active");
    });

    blocksArray.forEach((block) => {
      block.classList.remove("prim-block_active");
    });

    //indexOfElem(e.target) - button and block number
    let buttonIndex = indexOfElem(e.target);

    toBlockButtonsArray[buttonIndex].classList.add("left-panel__button_active");

    blocksArray[buttonIndex].classList.add("prim-block_active");
  }

  //wrap left panel to the left after block switching
  document.querySelector(".left-panel").classList.remove("left-panel_active");
});

//wrap left panel to the left when click on main content
blocksArray.forEach((block) => {
  block.addEventListener("click", () => {
    document.querySelector(".left-panel").classList.remove("left-panel_active");
  });
});
