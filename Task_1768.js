const word1 = 'abc';
const word2 = 'pqrds';

// const c =
//   [...word1].reduce((acc, cur, i) => acc + cur + word2[i], '') +
//   word2.slice(word1.length);

// [...word1] = ['a', 'b', 'c']
// .reduce((acc, cur, i) => acc + cur + word2[i], '')

const [longest, shortest] = word1 > word2 ? [word1.split(''), word2.split('')] : [word2.split(''), word1.split(''];
const red = [...word1].reduce((prev, cur) => prev + cur + word2.shift(), '');

console.log(red);
