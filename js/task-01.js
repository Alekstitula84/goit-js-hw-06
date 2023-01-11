const categoryElement = document.querySelectorAll(".item")

console.log("Number of categories:", categoryElement.length)

const categoryList = categoryElement.forEach((category) => {
    console.log("Category:", category.firstElementChild.textContent);
    console.log("Elements:", category.querySelectorAll("li").length)

});