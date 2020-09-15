"use strict";

document
  .querySelector(".left-panel__switcher")
  .addEventListener("click", () => {
    document.querySelector(".left-panel").classList.toggle("left-panel_active");
  });

let toBlockButtonsArray = document.querySelectorAll(".left-panel__button");
let blocksArray = document.querySelectorAll(".prim-blocks");
let toBlockButtonsContainer = document.querySelector(
  ".left-panel__toblock-links"
);

toBlockButtonsContainer.addEventListener("click", function (e) {
  if (e.target.hasAttribute("rel")) {
    //avoid click between btns (clicking on background)

    toBlockButtonsArray.forEach((toBlockBtn) => {
      toBlockBtn.classList.remove("left-panel__button_active");
    });
    
    for (let i = 0; i < blocksArray.length; i++) { 
      toBlockButtonsArray[i].classList.remove("left-panel__button_active");
      toBlockButtonsArray[i].style.backgroundImage = `url("../images/icons/left-panel/toblock-btn-icon-${i + 1}.svg")`;
    }

    blocksArray.forEach((block) => {
      block.classList.remove("active-prim-block");
    });

    let buttonNumber = e.target.getAttribute("rel");
    e.target.classList.add("left-panel__button_active");
    blocksArray[buttonNumber].classList.add("active-prim-block");
    e.target.style.backgroundImage = `url("../images/icons/left-panel/toblock-btn-icon-${ +buttonNumber + 1}_active.svg")`;
  }

  //wrap left panel to the left after block switching
  document.querySelector(".left-panel").classList.remove("left-panel_active");
});

toBlockButtonsArray.forEach((toBlockButton) => {
  toBlockButton.addEventListener("hover", () => {
    //toBlockButton.style.background:
  });
});

//function fillIcon() { }
