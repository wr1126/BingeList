const button = document.querySelector("#title button");
const formSection = document.getElementById("forms");

let idArr = [];

function paintForm(listId) {
  const div = document.createElement("div");
  div.className = "list";
  div.id = listId;
  const h1 = document.createElement("h1");
  h1.className = "categoryName";
  h1.style.display = "none";
  const categoryInput = document.createElement("input");
  categoryInput.className = "categoryInput";
  categoryInput.placeholder = "카테고리";
  const form = document.createElement("form");
  const itemInput = document.createElement("input");
  itemInput.className = "itemInput";
  itemInput.placeholder = "항목을 입력해주세요.";
  const ul = document.createElement("ul");

  form.appendChild(itemInput);
  div.appendChild(h1);
  div.appendChild(categoryInput);
  div.appendChild(form);
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
