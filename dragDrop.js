const container = document.querySelectorAll(".container");

let dragState = {
  dragElement: null,
  parentContainer: null,
};

function onDragStart(event) {
  dragState.dragElement = event.target;
  dragState.parentContainer = event.target.parentNode();
}

function onDragover(event) {
  const currentContainer = event.target.closest(".container");
  if (dragState.parentContainer === currentContainer) {
    return;
  }
  event.preventDefault();
}

function dropEvnt(event) {
  const dropContainer = event.target.closest(".container");
  dropContainer.appendChild(dragState.dragElement);
}

for (let i = 0; i < container.length; i++) {
  container[i].addEventListener("dragover", onDragover);
  container[i].addEventListener("drop", dropEvnt);
}
