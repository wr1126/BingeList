const categoryForm = document.querySelectorAll(".categoryForm");
const itemForm = document.querySelectorAll(".itemForm");

function saveList(titleObj, id) {
  let listData = [];
  listData.push(titleObj);
  localStorage.setItem(id, JSON.stringify(listData));
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

categoryForm.forEach(function (item) {
  item.addEventListener("submit", handleCategorySubmit);
});

/* function handleItemSubmit(event) {
  event.preventDefault();
}
itemForm.forEach(function (item) {
  item.addEventListener("submit", handleItemSubmit);
}); */
