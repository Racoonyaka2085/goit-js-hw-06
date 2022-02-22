const valueCategories =
    document.querySelectorAll("ul#categories>li.item");
console.log(`Number of categories: ${valueCategories.length}`);

const categoriesChild = document.querySelector('ul#categories').children;
for (let elem of categoriesChild) {
    let category = elem.firstElementChild.textContent;
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};