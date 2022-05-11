const categoryInput = document.querySelector(".categoryInput");
const categoryName = document.querySelector(".categoryName");
const itemForm = document.querySelector("form")

categoryInput.addEventListener("submit", (event) => {
  event.preventDefault();
  categoryName.innerText = categoryInput.value;
  categoryInput.style.display = "none";
});

itemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const ul = document.querySelector("ul")
  const li = document.createElement("li")
  li.innerText = event.target.value

})