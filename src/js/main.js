
// console.log(`Hell0`)
// console.log('Heㄥp Nataㄥy, i @m stuck in tha computer')

// Mobile Button for Drop Down menu
var dropDownBtn = document.querySelector('.menu-button'); 

if (dropDownBtn) {
	dropDownBtn.addEventListener('click', function() {
		let categoryMenu = document.querySelector('.category-buttons');
		categoryMenu.classList.toggle('closed');
	});
}
// ====================================================


//idea for spinning performers
// pull all the li(s) as an array.
// if they are in the x spot(center spot depending on how many performers there are) of the array then give them a class of show-large if they aren't give them the class of show-small. You'll hide small and large accordingly and have them positioned ontop of each other

//on click of any of them also does this..ie makes them go into the center spot and get the class of large

//if there are more than 3 performers than hide the others (left/right) and push/pop the array items as it auto spins

let performers = document.querySelectorAll(".performer");
let showSmall = document.querySelectorAll(".show-small");
let showBig = document.querySelectorAll(".show-big");

// console.log(performers)

performers.forEach(function(){

})
//voting is open/vote now disappears at 3s of video play
//Hovers for the Pictures and their Captions
let hoverInfoBox = document.querySelectorAll("figcaption");
hoverInfoBox.forEach(function(box){
	var figCaption = box.parentNode;
	
	figCaption.addEventListener("mouseover", function() {  
		// console.log(box.parentNode)
		box.style.display = 'block';
		box.style.opacity = '1';
	})	

	figCaption.addEventListener("mouseleave", function() {  	
		box.style.opacity = '0';

		setTimeout(function() {
			box.style.display = 'none';
		}, 500);
	})	
});








