'use strict';

console.log("THIS IS THE Vote App");

var url = 'http://localhost:1337/vote';
var voteBtn = document.querySelector('.vote');
console.log(voteBtn);

var artistA = 0;

voteBtn.addEventListener('click', function () {
  axios.post(url, {
    artistA: artistA
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
});
//# sourceMappingURL=VoteApp.js.map
