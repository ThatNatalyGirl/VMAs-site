'use strict';

console.log("THIS IS THE Vote App");

var LOCAL_URL = 'http://localhost:1337/vote'; //for development
var API_BASE = 'http://159.89.151.127:1337/vote'; // for production
var voteBtn0 = document.querySelector('.vote0');
var voteBtn1 = document.querySelector('.vote1');
var voteBtn2 = document.querySelector('.vote2');
var voteBtn3 = document.querySelector('.vote3');
var voteBtn4 = document.querySelector('.vote4');
var voteBtn5 = document.querySelector('.vote5');

// for (var i = 0; i < voteBtns.length; i++) {
voteBtn0.addEventListener('click', function () {
  axios.post(LOCAL_URL + "/0").then(function (response) {
    console.log(response.data);
    getData();
  }).catch(function (error) {
    console.log(error);
  });
});

voteBtn1.addEventListener('click', function () {
  axios.post(LOCAL_URL + "/1").then(function (response) {
    console.log(response.data);
    getData();
  }).catch(function (error) {
    console.log(error);
  });
});

voteBtn2.addEventListener('click', function () {
  axios.post(LOCAL_URL + "/2").then(function (response) {
    console.log(response.data);
    getData();
  }).catch(function (error) {
    console.log(error);
  });
});

voteBtn3.addEventListener('click', function () {
  axios.post(LOCAL_URL + "/3").then(function (response) {
    console.log(response.data);
    getData();
  }).catch(function (error) {
    console.log(error);
  });
});

voteBtn4.addEventListener('click', function () {
  axios.post(LOCAL_URL + "/4").then(function (response) {
    console.log(response.data);
    getData();
  }).catch(function (error) {
    console.log(error);
  });
});

voteBtn5.addEventListener('click', function () {
  axios.post(LOCAL_URL + "/5").then(function (response) {
    console.log(response.data);
    getData();
  }).catch(function (error) {
    console.log(error);
  });
});

// }


var getData = function getData() {
  axios.get(LOCAL_URL + '/0').then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
};
//# sourceMappingURL=VoteApp.js.map
