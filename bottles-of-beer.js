var verses = []
var maxBottles = 99

//run the loop to fill the array
for( var i = maxBottles;   i > 0;   i-- ) {
  //declare the necessary variables
  var nextBottleNum = ( (i - 1) > 0 ) ? ( i - 1 ) : "no more"
  var nextContainer = (i === 2) ? "bottle" : "bottles"
  var curContainer = (i === 1) ? "bottle" : "bottles"
  var currentVerse = i +  " " + curContainer + " of beer on the wall, " + i + " " + curContainer +  " of beer. Take one down and pass it around, " + nextBottleNum + " " + nextContainer + " of beer on the wall.";
  verses.push(currentVerse);

  //if we have gotten to the end of the song we have to go buy more beer
  if ( i === 1 ) {
    verses.push("No more bottles of beer on the wall, " + nextBottleNum + " bottles of beer. Go to the store and buy some more, " + maxBottles + " bottles of beer on the wall.");
  }
}

console.log(verses.join('\n'));
