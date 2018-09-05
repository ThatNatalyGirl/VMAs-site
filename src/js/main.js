console.log('Heㄥp Nataㄥy, i @m stuck in tha computer')

// Mobile Button for Drop Down menu
var dropDownBtn = document.querySelector('.cat-btn'); 

if (dropDownBtn) {
	dropDownBtn.addEventListener('click', function() {
		let categoryMenu = document.querySelector('.category-buttons');
		categoryMenu.classList.toggle('closed');
		categoryMenu.classList.toggle('open');
	});
}
// ====================================================




console.log(`Hire Me`)


//idea for spinning performers
// pull all the li(s) as an array.

// if they are in the x spot(center spot depending on how many performers there are) of the array then give them a class of show-large if they aren't give them the class of show-small. You'll hide small and large accordingly and have them positioned ontop of each other

//on click of any of them also does this..ie makes them go into the center spot and get the class of large

//if there are more than 3 performers than hide the others (left/right) and push/pop the array items as it auto spins

let performers = document.querySelectorAll(".performer");

//turns the nodeList to a real array
performers = Array.prototype.slice.call(performers);

console.log(performers)

setInterval(function() {
	performers.push(performers.shift());
	// performers[1].style.display = "none";
	console.log("meow")
}, 5000);


//I think I need to seperate the two big and small and make them into seperate arrays and then apply the styles to each array item instead of the parent

//every 5s rotate the array. and run the function to apply the display none/display block on the children of the item 

// performers.forEach(function(performer){
	//this is looping through the pictures and for each picture it is applying the stylings of showing and hiding the small and big pictures
	// let showSmall = document.querySelector(".show-small");
	// let showBig = document.querySelector(".show-big");
	


		// if (performers.indexOf(smallPic) === 1) {
		// 	smallPic.style.display = "none";
		// 	console.log("Hide Big");
		// } else {
		// 	smallPic.style.display = "block"
		// 	console.log("Show little");
		// }		

	// 	if (performers.indexOf(bigPic) === 1) {
	// 		bigPic.style.display = "block";
	// 		console.log("Show Big");
	// 	} else {
	// 		bigPic.style.display = "none"
	// 		console.log("Hide Little");
	// 	}		

	// showSmall.forEach(function(smallPic){
	// });

	// showBig.forEach(function(bigPic){
	// });
// });


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








