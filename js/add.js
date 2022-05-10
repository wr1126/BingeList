const button = document.querySelector("#title button");
const formSection = document.getElementById("forms");

function addForm() {
  const div = document.createElement("div");
  div.className = "list";
  const h1 = document.createElement("h1");
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

button.addEventListener("click", addForm);
