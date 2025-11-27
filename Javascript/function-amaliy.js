//Juft toqlikka tekshirish
function juftDecloration(number) {
  if (number % 2 === 0) {
    console.log(`${number} juft son !`);
  } else {
    console.log(`${number} juft son emas !`);
  }
}
juftDecloration(5);

const juftExpression = function (number) {
  if (number % 2 === 0) {
    console.log(`${number} juft son !`);
  } else {
    console.log(`{number} juft son emas !`);
  }
};
juftExpression(6);

const juftArrow = (number) => {
  if (number % 2 === 0) {
    console.log(`${number} juft son !`);
  } else {
    console.log(`${number} juft son emas !`);
  }
};
juftArrow(13);

// 2 sondan kattasini aniqlash
function bigDecoration(a, b) {
  if (a > b) {
    console.log(`Kattasi ${a}`);
  } else if (a < b) {
    console.log(`Kattasi ${b}`);
  } else {
    console.log(`Ikkalasi teng`);
  }
}
bigDecoration(2, 5);

const bigExpression = function (a, b) {
  if (a > b) {
    console.log(`Kattasi ${a}`);
  } else if (a < b) {
    console.log(`Kattasi ${b}`);
  } else {
    console.log(`Ikkalasi teng`);
  }
};
bigExpression(6, 1);

const bigArrow = (a, b) => {
  if (a > b) {
    console.log(`Kattasi ${a}`);
  } else if (a < b) {
    console.log(`Kattasi ${b}`);
  } else {
    console.log(`Ikkalasi teng`);
  }
};
bigArrow(2, 2);

//Sonni teskarisiga yozish
function reverseDecoration(number) {
  const reverseDecStr = String(number);
  const reverseDecNum = Number(reverseDecStr.split("").reverse().join(""));
  console.log(reverseDecNum);
}
reverseDecoration(123);

const reverseExpression = function (number) {
  const reverseExpStr = String(number);
  const reverseExpNum = Number(reverseExpStr.split("").reverse().join(""));
  console.log(reverseExpNum);
};
reverseExpression(12341);

const reverseArrow = (number) => {
  const reverseArrStr = String(number);
  const reverseArrNum = Number(reverseArrStr.split("").reverse().join(""));
  console.log(reverseArrNum);
};
reverseArrow(6565);
