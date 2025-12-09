const mouseDouble = document.getElementById("mouse");

const MouseEvent = () => {
  mouseDouble.textContent = "Mouse event ikki marta bosildi !";
  mouseDouble.style.background = "red";
};
mouseDouble.addEventListener("dblclick", MouseEvent);

const input = document.getElementById("text");
const heading = document.getElementById("h1");
const changeHeading = () => {
  const box = input.value;
  heading.textContent = box;
};
input.addEventListener("input", changeHeading);
const button = document.getElementById("btn");
const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];
button.onclick = () => {
  modal.style.display = "block";
};
span.onclick = () => {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
