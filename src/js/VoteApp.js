console.log("THIS IS THE Vote App")

let url = 'http://localhost:1337/vote';
let voteBtns = document.querySelectorAll('.vote');
const API_BASE = 'http://159.89.151.127:1337/vote';
console.log(voteBtns);

for (var i = 0; i < voteBtns.length; i++) {
  voteBtns[i].addEventListener('click', function() {
    axios
      .post(url + "/0")
      .then(function (response) {
        console.log(response)
    })
      .catch(function (error) {
        console.log(error)

    });
  
  });

}




// let getData = function() {
// 	axios.get(url + '/0')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
// }

// voteBtns.forEach(function(voteBtn, i) {
//   console.log( voteBtn, i )

// })

