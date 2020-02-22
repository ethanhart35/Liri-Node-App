require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
//require in fs
var fs = require('fs');
//step 9
if(process.argv[2] === "movie-this"){
  moviethis(process.argv[3]);
};
if(process.argv[2] === "concert-this"){
  bandsintown(process.argv[3]);
}

function bandsintown(artist){
  //will be using axios
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response){
    for(var i = 0; i < response.data.length; i++){
      console.log("Venue Name: "+response.data[i].venue.name);
      console.log("Venue Location: "+response.data[i].venue.city+" "+response.data[i].venue.region);
      console.log("Date: "+response.data[i].datetime);
    }
})


}

function spotify(){

}

function moviethis(moviename){
    console.log("movie works");
    

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t="+ moviename+"&y=&plot=short&apikey=trilogy").then(
  function(response) {
      //title
      console.log("Title: "+response.data.Title);
      //year
      console.log("Year: "+response.data.Year);
      //rating
      console.log("Rating: "+ response.data.Rated);
      //country
      console.log("Country: "+response.data.Country);
      //lang
      console.log("Language: "+response.data.Language);
      //plot
      console.log("Plot: "+response.data.Plot);
      //actors
      console.log("Actors: "+response.data.Actors);
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
