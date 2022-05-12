const categoryForm = document.querySelectorAll(".categoryForm");
const itemForm = document.querySelectorAll(".itemForm");

let listArr = [];
let itemArr = [];

function saveList(titleObj, id) {
  listArr.push(titleObj);
  localStorage.setItem(id, JSON.stringify(listArr));
}

function handleCategorySubmit(event) {
  event.preventDefault();
  const id = event.target.parentNode.id;
  const input = event.target.querySelector(".categoryInput");
  const categoryName = event.target.parentNode.querySelector(".categoryName");
  let title = input.value;
  const titleObj = { title: title };
  saveList(titleObj, id);

  categoryName.innerText = title;
  event.target.style.display = "none";
  categoryName.style.display = "block";
  title = "";
}

function deleteItem(event) {
  const item = event.target;
  if (item.classList.contains("clicked")) {
    item.remove();
  } else {
    item.style.color = "gray";
    item.style.textDecoration = "line-through";
    item.classList.add("clicked");
  }
}

function saveItem(itemObj, listId) {
  itemArr.push(itemObj);
  localStorage.setItem(listId, JSON.stringify(itemArr));
}

function paintItem(itemObj, ul) {
  const li = document.createElement("li");
  li.innerText = itemObj.text;
  li.id = itemObj.id;
  ul.appendChild(li);
  li.addEventListener("click", deleteItem);
}

function handleItemSubmit(event) {
  event.preventDefault();
  const listId = event.target.parentNode.id;
  const ul = event.target.parentNode.querySelector("ul");
  const itemInput = event.target.querySelector(".itemInput");
  const itemId = Date.now();
  const itemObj = {
    text: itemInput.value,
    id: itemId,
  };
  paintItem(itemObj, ul);
  saveItem(itemObj, listId);
  itemInput.value = "";
}

categoryForm.forEach(function (item) {
  item.addEventListener("submit", handleCategorySubmit);
});

itemForm.forEach(function (item) {
  item.addEventListener("submit", handleItemSubmit);
});

if (localStorage.getItem("list") !== null) {
  const keyArr = JSON.parse(localStorage.getItem("list")); //(2) [1652381868642, 1652382330000]
  const list = [];
  list.push(document.querySelectorAll(".list"));
  const listId = list.filter((item) => item.id);
  console.log(keyArr, list, listId);

  /*   const ul = document.getElementById(keyArr).querySelector("ul");
  itemArr = JSON.parse(localStorage.getItem(keyArr));
  itemArr.forEach((item) => paintItem(item, ul)); */
} else {
  console.log("nope");
}
