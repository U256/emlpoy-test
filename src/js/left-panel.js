"use strict";

document
  .querySelector(".left-panel__switcher")
  .addEventListener("click", () => {
    document.querySelector(".left-panel").classList.toggle("left-panel_active");
  });

let toBlockButtonsArray = document.querySelectorAll(".left-panel__button");
let blocksArray = document.querySelectorAll(".prim-blocks");
let toBlockButtonsContainer = document.querySelector(
  ".left-panel__toblock-btns-chunk"
);

toBlockButtonsContainer.addEventListener("click", function (e) {
  if (e.target.hasAttribute("rel")) {
    //avoid click between btns (clicking on background)

    toBlockButtonsArray.forEach((toBlockBtn) => {
      toBlockBtn.classList.remove("left-panel__button_active");
    });

    blocksArray.forEach((block) => {
      block.classList.remove("active-prim-block");
    });

    //e.target.getAttribute("rel") - button and block number
    let relNumber = e.target.getAttribute("rel");

    toBlockButtonsArray[relNumber].classList.add("left-panel__button_active");

    blocksArray[relNumber].classList.add("active-prim-block");
  }

  //wrap left panel to the left after block switching
  document.querySelector(".left-panel").classList.remove("left-panel_active");
});
