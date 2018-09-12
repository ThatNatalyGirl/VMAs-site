'use strict';

console.log("THIS IS THE Vote App");

var LOCAL_URL = 'http://localhost:1337/vote'; //for development
var API_BASE = 'http://159.89.151.127:1337/vote'; // for production
var voteBtns = document.querySelectorAll('.vote');

voteBtns.forEach(function (voteBtn, i) {
  voteBtn.addEventListener('click', function () {

    axios.post(API_BASE + "/" + i).then(function (response) {
      var voteTotals = response.data;
      voteBtns.forEach(function (voteBtn, j) {
        voteBtn.setAttribute("disabled", "disabled");
        voteBtn.innerHTML = voteTotals[j];
      });
    }).catch(function (error) {
      console.log(error);
    });
  });
});
//# sourceMappingURL=VoteApp.js.map
