const button = document.querySelector("#title button");
const formSection = document.getElementById("forms");
//const listTitle = document.getElementsByClassName("categoryName");

let idArr = [];

function paintForm(listId) {
  const div = document.createElement("div");
  div.className = "list";
  div.id = listId;
  const h1 = document.createElement("h1");
  h1.className = "categoryName";
  h1.style.display = "none";
  const categoryForm = document.createElement("form");
  categoryForm.className = "categoryForm";
  const categoryInput = document.createElement("input");
  categoryInput.className = "categoryInput";
  categoryInput.placeholder = "카테고리";
  const itemForm = document.createElement("form");
  itemForm.className = "itemForm";
  const itemInput = document.createElement("input");
  itemInput.className = "itemInput";
  itemInput.placeholder = "항목을 입력해주세요.";
  const ul = document.createElement("ul");

  categoryForm.appendChild(categoryInput);
  itemForm.appendChild(itemInput);
  div.appendChild(h1);
  div.appendChild(categoryForm);
  div.appendChild(itemForm);
  div.appendChild(ul);
  formSection.appendChild(div);
}

function saveForm() {
  localStorage.setItem("list", JSON.stringify(idArr));
}

function addForm() {
  const listId = Date.now();
  idArr.push(listId);
  paintForm(listId);
  saveForm();
}

button.addEventListener("click", addForm);

if (localStorage.length !== 0) {
  idArr = JSON.parse(localStorage.getItem("list"));
  idArr.forEach(paintForm);
}
