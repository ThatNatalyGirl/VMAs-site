'use strict';

console.log('Hell0');
console.log('Heㄥp Nataㄥy, i @m stuck in tha computer');

// Mobile Button for Drop Down menu
var dropDownBtn = document.querySelector('.cat-btn');

dropDownBtn.addEventListener('click', function () {
	var categoryMenu = document.querySelector('.category-buttons');
	categoryMenu.classList.toggle('closed');
	categoryMenu.classList.toggle('open');
});
// ====================================================


//idea for spinning performers
// pull all the li(s) as an array.

// if they are in the x spot(center spot depending on how many performers there are) of the array then give them a class of show-large if they aren't give them the class of show-small. You'll hide small and large accordingly and have them positioned ontop of each other

//on click of any of them also does this..ie makes them go into the center spot and get the class of large

//if there are more than 3 performers than hide the others (left/right) and push/pop the array items as it auto spins
//# sourceMappingURL=main.js.map
