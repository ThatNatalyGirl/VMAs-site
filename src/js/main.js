console.log('Heㄥp Nataㄥy, i @m stuck in tha computer')

// Mobile Button for Drop Down menu
var dropDownBtn = document.querySelector('.menu-button'); 

if (dropDownBtn) {
	dropDownBtn.addEventListener('click', function() {
		let categoryMenu = document.querySelector('.menu-toggle');
		categoryMenu.classList.toggle('closed');
	});
}

// ====================================================
console.log(`Hire Me`)

setInterval(function() {
	let performersWrapper = document.querySelector(".performer-imgs");

	performersWrapper.insertBefore(performersWrapper.lastElementChild, performersWrapper.firstElementChild)
	console.log("and next");

}, 5000);



//voting is open/vote now disappears at 3s of video play

// ====================================================

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













