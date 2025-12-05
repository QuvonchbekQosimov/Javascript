//While
let son = prompt("Sonni kiriting : "),
  yigindiWhile = 0,
  i = 0,
  j = 0,
  yigindiDo = 0;
while (i < son) {
  yigindiWhile += i;
  i++;
}
console.log(`${son} gacha bo'lgan sonlar yig'indisi ${yigindiWhile} ga teng !`);

//Do-While
do {
  yigindiDo += j;
  j++;
} while (j < son);

console.log(`${son} gacha bo'lgan sonlar yig'indisi ${yigindiDo} ga teng !`);
