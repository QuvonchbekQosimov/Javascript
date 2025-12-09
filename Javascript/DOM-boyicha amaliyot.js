const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generate = () => {
  const maxEl = document.getElementById("max");
  const minEl = document.getElementById("min");
  const resultEl = document.getElementById("result");

  const min = Number(minEl.value);
  const max = Number(maxEl.value);

  if (min == "" || max == "") {
    alert("Iltimos, min va max qiymatlarni kiriting!");
  }

  if (min > max) {
    alert("Min maxdan kichik bo‘lishi kerak!");
  }

  resultEl.textContent = generateRandomNumber(min, max);
};

const btn = document.getElementById("generate");
btn.addEventListener("click", generate);
