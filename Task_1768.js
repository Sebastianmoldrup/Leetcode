const word1 = 'fb';
const word2 = 'ce';

/* const [longest, shortest] =
  word1 > word2
    ? [word1.split(''), word2.split('')]
    : [word2.split(''), word1.split('')];

const red =
  [...shortest].reduce((prev, cur) => {
    const alt = longest.length ? longest.shift() : '';
    return prev + cur + alt;
  }, '') + longest.join('');

console.log(red); */

word2 = [...word2];
const red =
  [...word1].reduce((combined, char) => {
    const alt = word2.length ? word2.shift() : '';
    return combined + char + alt;
  }, '') + longest.join('');

console.log(red);
