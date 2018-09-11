console.log("THIS IS THE Vote App")

const LOCAL_URL = 'http://localhost:1337/vote'; //for development
const API_BASE = 'http://159.89.151.127:1337/vote'; // for production
let voteBtn0 = document.querySelector('.vote0');
let voteBtn1 = document.querySelector('.vote1');
let voteBtn2 = document.querySelector('.vote2');
let voteBtn3 = document.querySelector('.vote3');
let voteBtn4 = document.querySelector('.vote4');
let voteBtn5 = document.querySelector('.vote5');


// for (var i = 0; i < voteBtns.length; i++) {
voteBtn0.addEventListener('click', function() {
    axios
      .post(LOCAL_URL + "/0")
      .then(function (response) {
        console.log(response.data)
        getData()
    })
      .catch(function (error) {
        console.log(error)

    });
  
  });


voteBtn1.addEventListener('click', function() {
  axios
    .post(LOCAL_URL + "/1")
    .then(function (response) {
      console.log(response.data)
      getData()
  })
    .catch(function (error) {
      console.log(error)

  });

});

voteBtn2.addEventListener('click', function() {
  axios
    .post(LOCAL_URL + "/2")
    .then(function (response) {
      console.log(response.data)
      getData()
  })
    .catch(function (error) {
      console.log(error)

  });

});

voteBtn3.addEventListener('click', function() {
  axios
    .post(LOCAL_URL + "/3")
    .then(function (response) {
      console.log(response.data)
      getData()
  })
    .catch(function (error) {
      console.log(error)

  });

});

voteBtn4.addEventListener('click', function() {
  axios
    .post(LOCAL_URL + "/4")
    .then(function (response) {
      console.log(response.data)
      getData()
  })
    .catch(function (error) {
      console.log(error)

  });

});

voteBtn5.addEventListener('click', function() {
  axios
    .post(LOCAL_URL + "/5")
    .then(function (response) {
      console.log(response.data)
      getData()
  })
    .catch(function (error) {
      console.log(error)

  });

});

// }







let getData = function() {
	axios
  .get(LOCAL_URL + '/0')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

