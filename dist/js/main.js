"use strict";

console.log("Hell0");

//idea for spinning performers
// pull all the li(s) as an array.

// if they are in the x spot(center spot depending on how many performers there are) of the array then give them a class of show-large if they aren't give them the class of show-small. You'll hide small and large accordingly and have them positioned ontop of each other

//on click of any of them also does this..ie makes them go into the center spot and get the class of large

//if there are more than 3 performers than hide the others (left/right) and push/pop the array items as it auto spins

// let hoverInfoImage = document.querySelectorAll("figure")
var hoverInfoBox = document.querySelectorAll("figcaption");

hoverInfoBox.forEach(function (box) {
	var figCaption = box.parentNode;

	figCaption.addEventListener("mouseover", function () {
		console.log(box.parentNode);
		console.log(box);

		box.style.display = 'block';
		box.style.opacity = '1';
	});

	figCaption.addEventListener("mouseleave", function () {
		box.style.opacity = '0';
		setTimeout(function () {
			box.style.display = 'none';
		}, 500);
	});
});
//# sourceMappingURL=main.js.map
