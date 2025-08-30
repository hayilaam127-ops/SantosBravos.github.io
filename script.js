const list = document.getElementById("lineup");
const resetBtn = document.getElementById("reset");

// Simple drag & drop reorder
let draggedItem = null;

list.addEventListener("dragstart", e => {
  draggedItem = e.target;
});

list.addEventListener("dragover", e => {
  e.preventDefault();
  const target = e.target;
  if (target.tagName === "LI" && target !== draggedItem) {
    list.insertBefore(draggedItem, target.nextSibling);
  }
});

// Reset order
resetBtn.addEventListener("click", () => {
  list.innerHTML = `
    <li draggable="true">Contestant A</li>
    <li draggable="true">Contestant B</li>
    <li draggable="true">Contestant C</li>
    <li draggable="true">Contestant D</li>
  `;
});
