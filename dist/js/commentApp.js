'use strict';

console.log("This is the Comment App");
var LOCAL_URL_COMMENT = 'http://localhost:1337/comment';
var API_BASE_COMMENT = 'http://159.89.151.127:1337';
var commentBtns = document.querySelectorAll('.comment');
var commentInput = document.querySelectorAll('input[name="user-comment"]');
var postBtn = document.querySelectorAll('.send');

commentBtns.forEach(function (comment) {
	comment.addEventListener('click', function () {
		commentInput.forEach(function (i) {
			i.classList.toggle('closed');
		});
		postBtn.forEach(function (e) {
			e.classList.toggle('closed');
		});
	});
});

//Send Message

var sendComment = function sendComment() {
	console.log('being clicked');
	var commentInput = document.querySelectorAll('input[name="user-comment"]');
	commentInput.forEach(function (singleComment) {
		console.log(singleComment.value);
		axios.post(LOCAL_URL_COMMENT, {
			text: singleComment.value
		}).then(function (response) {
			singleComment.value = "";
			console.log('server responsed', response);
			showComments(response.data);
		}).catch(function (error) {
			console.log('Not Working', error);
		});
	});
};

postBtn.forEach(function (btn) {
	btn.addEventListener('click', sendComment);
});

var showComments = function showComments(comments) {
	console.log('showing comments', comments);

	var commentsUL = document.querySelector('ul.comments');
	commentsUL.innerHTML = '';

	comments.forEach(function (comment) {
		var newComment = document.createElement('li');
		newComment.innerHTML = '' + comment.text;

		commentsUL.appendChild(newComment);
	});
};
//# sourceMappingURL=commentApp.js.map
