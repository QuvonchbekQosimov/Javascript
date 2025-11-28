//Bo'sh Array
const emptyArray = [];
console.log(emptyArray);

//Turli xil turdagi elementlardan tashkil topgan array
const variousArray = ["salom", 4, true];
console.log(variousArray);

//Array ga element qo'shish oxiridan
const addArrayEnd = [3, 5, 3, 2, 1, 7];
addArrayEnd.push = 5;
console.log(addArrayEnd);

//Array ga element qo'shish boshidan
const addArray = [4, 6, 7, 8, 9, "salom"];
addArray.unshift = 0;
console.log(addArray);

//Arraydan element o'chirish oxiridan
const delArrayEnd = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const deleteEnd = delArrayEnd.pop();
console.log(delArrayEnd);
console.log(deleteEnd);

//Arraydan element o'chirish boshidan
const delArrayStart = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const deleteStart = delArrayStart.shift();
console.log(delArrayStart);
console.log(deleteStart);

//Arrayda elemntlarni o'zgartirish
const repleceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
repleceArray[9] = 10;
console.log(repleceArray);
