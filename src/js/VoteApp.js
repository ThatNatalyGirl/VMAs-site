console.log("THIS IS THE Vote App")

let url = 'http://localhost:1337/vote';
let voteBtn = document.querySelector('.vote');
console.log(voteBtn);

let artistA = 0;

voteBtn.addEventListener('click', function() {
	axios
		.post(url, {
			artistA: artistA
	})
		.then(function (response) {
       		console.log(response)
    })
    	.catch(function (error) {
        	console.log(error)
    });
});