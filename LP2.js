// variable "animals" containing my array of strings that I used to loop through
// in this excersize.
var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// first for loop that loops from position 0, to position 3
for (var i=0; i < 4; i++) {
  console.log(animals[i])
}
// second loop that loops every other string, starting at position 0
for (var i=0; i < animals.length; i+=2) {
  console.log(animals[i])
}
// third loop that loops all strings, starging at the 4th position, and finishing
// at the 0th position.
for (var i=4; i >= 0; i--) {
  console.log(animals[i])
}
// fourth loop that prints the first and last strings once, and the other three
// strings twice.
for (var i=0; i <= 4; i++) {
  if (i === 1) {
    console.log(animals[1])
  }
  else if (i === 2) {
    console.log(animals[2])
  }
  else if (i === 3) {
    console.log(animals[3])
  }
  console.log(animals[i])
}
