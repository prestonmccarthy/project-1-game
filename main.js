console.log("loaded")

const mainGame = document.querySelector(".main-game");
const totalScore = document.querySelector(".total")



function addCategory(category) {
    const column = document.createElement("div");
    column.classList.add("category-column");

    const subjectTitle = document.createElement("div");
    subjectTitle.classList.add("category-title")
    subjectTitle.innerHTML = category.subject
}