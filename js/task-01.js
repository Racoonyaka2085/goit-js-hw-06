const valueCategories =
    document.querySelectorAll("ul#categories>li.item");
console.log(`Number of categories: ${valueCategories.length}`);

const categoriesChild = document.querySelector('ul#categories').children;
const valueItemCategories = valueCategories.forEach((element) => {
    let category = element.firstElementChild.textContent;
    let quantityElem = element.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
})