const x = 121;

// Palindrome();

// function Palindrome(value) {
//   const arr = String(value).split('');
//   const rev = String(value).split('').reverse();

//   console.log(arr);
//   console.log(rev);

//   console.log(arr.join(''));
//   console.log(rev.join(''));

//   if (arr.join('') === rev.join('')) {
//     return console.log('worked');
//   } else {
//     return console.log('failed');
//   }
// }

// Palindrome(x);

const Palindrome = (value) =>
  String(value) === String(value).split('').reverse().join('');

console.log(Palindrome(x));
