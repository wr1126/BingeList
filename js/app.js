const mainForm = document.getElementById("mainForm");
const mainInput = document.getElementById("mainInput");
const mainList = document.getElementById("bingeList");

let arr = [];

function paintList(itemObj) {
  const li = document.createElement("li");
  li.id = itemObj.id;
  const span = document.createElement("span");
  span.innerText = itemObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  mainList.appendChild(li);
  button.addEventListener("click", deleteItem);
}

function saveList() {
  localStorage.setItem("firstList", JSON.stringify(arr));
}

function deleteItem(item) {
  const target = item.target.parentNode;
  const newArr = arr.filter((temp) => parseInt(target.id) !== temp.id);
  arr = newArr;
  saveList();
  target.remove();
}

function handleSubmit(event) {
  event.preventDefault();
  const bingeItem = mainInput.value;
  const itemId = Date.now();
  const itemObj = {
    text: bingeItem,
    id: itemId,
  };
  arr.push(itemObj);
  paintList(itemObj);
  saveList();
  mainInput.value = "";
}

mainForm.addEventListener("submit", handleSubmit);

if (localStorage.length !== 0) {
  arr = JSON.parse(localStorage.getItem("firstList"));
  arr.forEach(paintList);
}
