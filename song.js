//Removes all instances of 'WUB' from a string, inserts a space(only one for multiple 'WUB' in a row)
//Then trims leading and trailing spaces
//6kyu codewars link: https://www.codewars.com/kata/52ebe4608567ade7d700044a

function songDecoder(song) {
  // ...
  //regex matches all instances of 1 or more 'WUB' including multiples, and replaces with a ' '
  song = song.replace(/(WUB)+/g, ' ')
  console.log(song)
  return song

}



console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBWUBWUBWUBMYWUBFRIENDWUB"))