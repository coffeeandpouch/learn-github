"use strict";

function getDogImage(someBreed) {
  fetch(`https://dog.ceo/api/breed/${someBreed}/images/random`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    //.catch((error) => alert("Breed that you are looking for cannot be found"));
}

  function displayResults(responseJson) {
    //map dog img to html tag
    const breedPic = responseJson.message(
      (url) => `<img src="${url}" class="results-img">`
    );
    //replace existing image with a new one
    $("#dog").html(breedPic);
    $(".results").removeAttr("hidden");
  };

  function watchForm() {
    $("form").submit((event) => {
      event.preventDefault();
      var dogBreed = $("#breed").val();
      getDogImage(dogBreed);
    });
  }

  $(function () {
    console.log("App loaded! Waiting for submit!");
    watchForm();
  });

