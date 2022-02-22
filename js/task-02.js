const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const listIngredients = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i++) {
    let liIngredient = document.createElement("li");
    liIngredient.classList.add("item");
    liIngredient.textContent = ingredients[i];
    listIngredients.append(liIngredient);
}
console.log(listIngredients);