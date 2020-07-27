"use strict";

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  //map each dog img to image html tags
  const imageTags = responseJson.message.map(
    (url) => `<img src="${url}" class="results-img">`
  );
  //join each html tag into one string
  const imageHtml = imageTags.join("");
  //replace the existing image with a new one

  $("#dog").html(imageHtml);

  $(".results").removeAttr("hidden");
  
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    var numOfDogs = $("#number").val();
    getDogImage(numOfDogs);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});