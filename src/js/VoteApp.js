console.log("THIS IS THE Vote App")

let url = 'http://localhost:1337/vote';
let voteBtn = document.querySelector('.vote');
console.log(voteBtn);

let artistA = 0;

voteBtn.addEventListener('click', function(plus) {
	axios
		.post(url, {
			artistA: artistA
	})
		.then(function (response) {
			let artistA = plus;
				plus++
       		console.log(response)
    })
    	.catch(function (error) {
        	console.log(error)
    });
});


let getData = function() {
	axios.get('http://localhost:1337')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

