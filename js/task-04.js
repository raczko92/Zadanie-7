const Create = document.querySelector("button[data-create]");
const Destroy = document.querySelector("button[data-destroy]");
const Input = document.querySelector("input");
const pudelko = document.querySelector("#boxes");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function createBoxes(amount) {
let tablica = [];     
if (amount <= 100) {
    for (let i=1; i<=amount; i++) {
        const item = document.createElement("div");
    item.style.width=`${30 + 10*i }px`; 
    item.style.height=`${30 + 10*i }px`;
    item.style.background=getRandomHexColor(); 
    tablica.push(item);   
    }
    return tablica;
}
  
return "Wartość musi być mniejsza niż 100";

}
Create.addEventListener('click', () => {
    let box = createBoxes(Input.value)
    pudelko.append(...box) 
} ) 

const destroyBoxes = () => {
    boxes.innerHTML = ' ' 
}  

Destroy.addEventListener('click', destroyBoxes) 