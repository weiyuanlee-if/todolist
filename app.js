const doList = document.querySelector(".do-list");
const inputBox = document.querySelector(".inputbox");
const addButton = document.querySelector(".addBtn");
const removeButton = document.querySelector(".removeBtn");
const doListChild = document.querySelector(".taskitem")

addButton.addEventListener("click", function(){
const newLi = document.createElement('li');
const liContent = document.createTextNode(inputBox.value);
newLi.appendChild(liContent);
doList.appendChild(newLi);
});

removeButton.addEventListener("click", function() {
const parentList = document.querySelector('.do-list');
parentList.removeChild(parentList.lastElementChild);
});

