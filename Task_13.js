const s = 'III';

function romanToInteger(value) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (i = 0; i < s.length; i++) {
    const num = roman[i];
    return console.log(num);
  }
}

romanToInteger(s);
