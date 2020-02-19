require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
//require in fs 
//step 9

function bandsintown(){
    //will be using axios

}

function spotify(){

}

function moviethis(moviename){
    console.log("movie works");
    console.log("http://www.omdbapi.com/?t="+moviename+"s&y=&plot=short&apikey=trilogy")
    

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t="+ moviename+"&y=&plot=short&apikey=trilogy").then(
  function(response) {
      //title
      console.log("Title: "+response.data.Title)
      //year
      //rating
      //country
      //lang
      //plot
      //actors
    console.log("The movie's rating is: " + response.data.imdbRating);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

}

function dowhatitsays(){

}

moviethis("frozen");