const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const listArr=[];
ingredients.forEach(ingredient => {
    const item = document.createElement("li");
    item.textContent=ingredient;
    item.className="item";
    listArr.push(item);
})
list.append(...listArr);
