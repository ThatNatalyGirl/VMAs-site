console.log("THIS IS THE Vote App")

let LOCAL_URL = 'http://localhost:1337/vote';
let voteBtns = document.querySelectorAll('.vote');
const API_BASE = 'http://159.89.151.127:1000/vote';


voteBtns.forEach(function(voteBtn, i) {
  voteBtn.addEventListener('click', function() {

  if (this.getAttribute("disabled")) return
    axios
      .post(LOCAL_URL + "/" + i)
      .then(function (response) {
        let voteTotals = response.data;
      voteBtns.forEach(function(voteBtn, j) {
        voteBtn.setAttribute("disabled", "disabled")
        voteBtn.innerHTML = voteTotals[j]
      })
    })
           .catch(function (error) {
        console.log(error)
    })
  })
   
})


