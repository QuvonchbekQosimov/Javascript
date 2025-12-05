//chegradagi sonni tekshirish
let min = prompt("chegaraning boshlanish nuqtasi : "),
  max = prompt("chegaraning oxirgi nuqtasi : "),
  NumChegara = prompt("chegara uchun sonni kiriting : ");
if (NumChegara <= max && NumChegara >= min) {
  console.log(`${NumChegara} soni ${min} va ${max} sonlari orasida !`);
} else {
  console.log(`${NumChegara} soni ${min} va ${max} sonlari orasida emas !`);
}

//Mini calculator
let num1 = +prompt("a = "),
  num2 = +prompt("b = "),
  natija = prompt("Amalni tanlang (qoshish, ayirish, kopaytirish, bolish): ");

switch (natija) {
  case "qoshish":
    console.log(`Yig'indisi ${num1 + num2}`);
    break;
  case "ayirish":
    console.log(`Ayirmasi ${num1 - num2}`);
    break;
  case "kopaytirish":
    console.log(`Ko'paytmasi ${num1 * num2}`);
    break;
  case "bolish":
    console.log(`Bo'linmasi ${num1 / num2}`);
    break;
  default:
    console.log("Amal aniqlanmadi!");
    break;
}

//Massivdan eng katta elementni topish
let array = [],
  m = prompt("Massiv uzunligini kiriting : ");
for (let index = 0; index < m; index++) {
  array[index] = prompt(`${index} elementni massivga kiriting : `);
}
let katta = array[0];
for (let index = 0; index < m; index++) {
  if (array[index] > katta) {
    katta = array[index];
  } else {
    katta = katta;
  }
}
console.log(`Massivda eng katta element ${katta}`);
