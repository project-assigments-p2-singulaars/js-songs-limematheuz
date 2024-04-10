import { songs } from "./data.js";

//Exercise 1: Get the array of all Artists.
function getAllArtists(songs) {
  const artists = songs.map((song) => song.artist);
  console.log(artists);
  //   return(artists)
}
getAllArtists(songs);

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(songs, artist) {
  let getSongOfArtist = songs.filter((song) => song.artist === artist);
  console.log(getSongOfArtist);
}

let acdcSongs = getSongsFromArtist(songs, "AC/DC");
console.log(acdcSongs);
getSongsFromArtist(songs);

//Exercise 3: Alphabetic order by title
function orderAlphabetically(songs) {
  const alphabeticOrder = songs.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(alphabeticOrder);
}
orderAlphabetically(songs);

//Exercise 4: Order by year, ascending
function orderByYear() {
  //Write your code here
}

//Exercise 5: Filter songs by genre
function songsByGenre() {
  //Write your code here
}

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
  //Write your code here
}

//Exercise 7: Get the longest song
function getLongestSong() {
  //Write your code here
}

//Exercise 8: Get the shortest song
//Write the getShortestSong() function

export {
  getAllArtists,
  getSongsFromArtist,
  orderAlphabetically,
  orderByYear,
  songsByGenre,
  minutsToSeconds,
  getLongestSong,
};