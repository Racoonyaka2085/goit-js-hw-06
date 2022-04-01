const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const listIngredients = document.querySelector("#ingredients");

const liElements = ingredients.map((ingredient) => {
    let liIngredient = document.createElement("li");
    liIngredient.classList.add("item");
    liIngredient.textContent = ingredient;
    return liIngredient;
})


listIngredients.append(...liElements);
console.log(listIngredients);