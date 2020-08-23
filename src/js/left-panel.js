'use strict'

document.querySelector('.left-panel__switcher').addEventListener('click', e => {
	document.querySelector('.left-panel').classList.toggle('left-panel_active')
})


let toBlockButtonsArray = document.querySelectorAll('.toblock-btn');;
let blocksArray = document.querySelectorAll('.prim-blocks')
let toBlockButtonsContainer = document.querySelector('.left-panel__toblock-links')

toBlockButtonsContainer.addEventListener('click', function (e) {



	if (e.target.getAttribute('rel') != null) {
		//avoid click between btns (clicking on background)

		toBlockButtonsArray.forEach((toBlockBtn) => {
			toBlockBtn.classList.remove("toblock-btn_active");
		});
		blocksArray.forEach((block) => {
			block.classList.remove("active-prim-block");
		});

		e.target.classList.add("toblock-btn_active");
		//e.target.getAttribute('rel') - button number
		blocksArray[e.target.getAttribute('rel')].classList.add("active-prim-block");
	}

	//wrap left panel to the left after block switching
	document.querySelector('.left-panel').classList.remove('left-panel_active')
})