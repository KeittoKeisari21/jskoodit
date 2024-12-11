function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const name = prompt('What is your name?');
const value = getRandomInt(4);
let vast = '';
if (value == 0) {
  vast = ' You\'re a Ravenclaw!';
} else if (value == 1) {
  vast = ' You\'re a Hufflepuff!';
} else if (value == 2) {
  vast = ' You\'re a Slytherin!';
} else if (value == 3) {
  vast = ' You\'re a Gryffindor!';
}

