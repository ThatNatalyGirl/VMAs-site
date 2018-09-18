'use strict';

console.log("This is the Comment App");
var LOCAL_URL_COMMENT = 'http://localhost:1337/comment';
var API_BASE_COMMENT = 'http://159.89.151.127:1337/comment';
var commentBtns = document.querySelectorAll('.comment');
console.log(commentBtns);
var postBtn = document.querySelectorAll('.send');

commentBtns.forEach(function (comment) {
	comment.addEventListener('click', function () {
		var userInput = this.parentElement.querySelector('.user-input');
		userInput.classList.toggle('closed');
		var send = this.parentElement.querySelector('.send');
		send.classList.toggle('closed');
	});
});

var sendComment = function sendComment() {
	console.log('being clicked');

	console.log("clicked send button", this);
	console.log(this.parentElement);
	var newComment = this.parentElement.querySelector('.user-input').value;
	console.log(newComment);
	console.log("send comment for artist: ", this.dataset.artist);
	axios.post(API_BASE_COMMENT + "/" + this.dataset.artist, {
		text: newComment
	}).then(function (response) {
		console.log('server responsed', response);
		showComments(response.data);
	}).catch(function (error) {
		console.log('Not Working', error);
	});
};

postBtn.forEach(function (btn) {
	btn.addEventListener('click', sendComment);
});

var showComments = function showComments(comments) {
	console.log('showing comments', comments);

	var commentsULs = document.querySelectorAll('ul.comments');
	commentsULs.forEach(function (commentsUL) {
		commentsUL.innerHTML = '';
	});

	comments.forEach(function (showComment, i) {
		// through the 6 comment arrays

		showComment.forEach(function (p) {
			// through the comments within them
			var newComment = document.createElement('p');
			newComment.classList.add('new-li');
			newComment.innerHTML = 'Commented: ' + p.text;
			console.log("New Comment" + newComment);
			commentsULs[i].appendChild(newComment);
		});
	});
};
//# sourceMappingURL=commentApp.js.map
