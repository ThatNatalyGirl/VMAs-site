console.log("This is the Comment App");
const LOCAL_URL_COMMENT = 'http://localhost:1337/comment';
const API_BASE_COMMENT = 'http://159.89.151.127:1337'
let commentBtns = document.querySelectorAll('.comment');
let commentInput = document.querySelectorAll('input[name="user-comment"]');
let postBtn = document.querySelectorAll('.send');





commentBtns.forEach(function(comment) {
	comment.addEventListener('click', function() {
		commentInput.forEach(function(i) {
			i.classList.toggle('closed');
		})
		postBtn.forEach(function(e) {
			e.classList.toggle('closed');
		})
	})
})


//Send Message

let sendComment = function() {
	console.log('being clicked')
	let commentInput = document.querySelectorAll('input[name="user-comment"]');
		commentInput.forEach(function(singleComment) {
		console.log(singleComment.value)
	axios
		.post(LOCAL_URL_COMMENT , {
			text: singleComment.value
		})
		.then(function(response) {
			singleComment.value = "";
			console.log('server responsed', response)
			showComments(response.data)
		})
		.catch(function(error) {
			console.log('Not Working', error)
		})
	})
}
	

postBtn.forEach(function(btn) {
	btn.addEventListener('click', sendComment);
})



let showComments = function(comments) {
	console.log('showing comments', comments)

	let commentsUL = document.querySelector('ul.comments');
	commentsUL.innerHTML = '';

	comments.forEach(function(comment) {
		let newComment = document.createElement('li');
		newComment.innerHTML = `${comment.text}`

		commentsUL.appendChild( newComment )
	})
}






