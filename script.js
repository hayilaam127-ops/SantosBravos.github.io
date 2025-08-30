const list = document.getElementById("lineup");
const resetBtn = document.getElementById("reset");

// Drag & drop reorder
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

// Reset order button
resetBtn.addEventListener("click", () => {
  list.innerHTML = `
    <li draggable="true">Participant 1</li>
    <li draggable="true">Participant 2</li>
    <li draggable="true">Participant 3</li>
    <li draggable="true">Participant 4</li>
    <li draggable="true">Participant 5</li>
    <li draggable="true">Participant 6</li>
    <li draggable="true">Participant 7</li>
    <li draggable="true">Participant 8</li>
    <li draggable="true">Participant 9</li>
    <li draggable="true">Participant 10</li>
    <li draggable="true">Participant 11</li>
    <li draggable="true">Participant 12</li>
    <li draggable="true">Participant 13</li>
  `;
});
