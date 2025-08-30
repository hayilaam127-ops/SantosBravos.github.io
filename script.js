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
   <li draggable="true"><img src="Santos Bravos.jpg" alt="Drew"> Drew</li>
    <li draggable="true"><img src="Santos Bravos-2.jpg" alt="Priano"> Priano</li>
    <li draggable="true"><img src="Santos Bravos-3.jpg" alt="Pablo"> Pablo</li>
    <li draggable="true"><img src="Santos Bravos-4.jpg" alt="Diego"> Diego</li>
    <li draggable="true"><img src="Santos Bravos-5.jpg" alt="Lucas"> Lucas</li>
    <li draggable="true"><img src="Santos Bravos-6.jpg" alt="Leo"> Leo</li>
    <li draggable="true"><img src="Santos Bravos-7.jpg" alt="Alejandro"> Alejandro</li>
    <li draggable="true"><img src="Santos Bravos-8.jpg" alt="Iannis"> Iannis</li>
    <li draggable="true"><img src="Santos Bravos-9.jpg" alt="Alex"> Alex</li>
    <li draggable="true"><img src="Alejandro Gabriel on Ig | @gabiprpr.jpg" alt="Gabi"> Gabi</li>
    <li draggable="true"><img src="Santos Bravos-11.jpg" alt="Luigi"> Luigi</li>
    <li draggable="true"><img src="Santos Bravos-12.jpg" alt="Kauê"> Kauê/li>
    <li draggable="true"><img src="Santos Bravos-13.jpg" alt="Jesuale"> Jesuale</li>
    <li draggable="true"><img src="Santos Bravos-14.jpg" alt="Kenneth"> Kenneth</li> 
    `;
});
