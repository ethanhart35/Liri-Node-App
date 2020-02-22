require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var inquirer = require("inquirer");
//require in fs
var fs = require('fs');
//step 9
if (process.argv[2] === "movie-this") {
  moviethis();
};
if (process.argv[2] === "concert-this") {
  bandsintown();
}

function bandsintown() {
  inquirer.prompt({
    name: "band",
    type: "input",
    message: "What band do you want to search for?"
  }).then(function(answer){
    axios.get("https://rest.bandsintown.com/artists/" + answer.band + "/events?app_id=codingbootcamp").then(
      function (response) {
        for (var i = 0; i < response.data.length; i++) {
          console.log("Venue Name: " + response.data[i].venue.name);
          console.log("Venue Location: " + response.data[i].venue.city + " " + response.data[i].venue.region);
          console.log("Date: " + response.data[i].datetime);
        }
      });
  });
}

function spotify() {
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
}

function moviethis() {
  console.log("movie works");
  inquirer.prompt({
    name: "movie",
    type: "input",
    message: "What movie would you like to search for?"
  }).then(function (answer) {
    axios.get("http://www.omdbapi.com/?t=" + answer.movie + "&y=&plot=short&apikey=trilogy").then(
      function (response) {
        //title
        console.log("Title: " + response.data.Title);
        //year
        console.log("Year: " + response.data.Year);
        //rating
        console.log("Rating: " + response.data.Rated);
        //country
        console.log("Country: " + response.data.Country);
        //lang
        console.log("Language: " + response.data.Language);
        //plot
        console.log("Plot: " + response.data.Plot);
        //actors
        console.log("Actors: " + response.data.Actors);
      })
  });
}