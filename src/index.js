const form = document.getElementById("create-task-form");
const list = document.getElementById("tasks");
const input = document.getElementById("new-task-description");

document.addEventListener("DOMContentLoaded", () => { 
  form.addEventListener("submit", logSubmit);
});

function logSubmit(event) {
  const content = document.createElement("li");
  const deleteContent = document.createElement("button");
  event.preventDefault();
  content.textContent = input.value;
  deleteContent.textContent = "X";
  deleteContent.style.marginLeft = "5px";
  deleteContent.setAttribute('data-description', input.value);
  deleteContent.onclick = () => {
    deleteContent.parentElement.remove();
  };
  content.appendChild(deleteContent);
  list.appendChild(content);
  input.value = null;
}
