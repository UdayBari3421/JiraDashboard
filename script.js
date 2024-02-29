const createIssue = document.getElementById("create-issue");
const issueInput = document.getElementById("issue-input");
const todoContainer = document.getElementById("todo");

createIssue.addEventListener("click", onCreateClick);

issueInput.addEventListener("blur", onBlurCreateIssueInput);
issueInput.addEventListener("keyup", onEnterInput);

function toggleCreateIssueOptions() {
  console.log("toggle");
  createIssue.classList.toggle("hide");
  issueInput.classList.toggle("hide");
  if (!issueInput.classList.contains("hide")) {
    issueInput.focus();
  }
}

function onBlurCreateIssueInput() {
  if (!issueInput.classList.contains("hide")) {
    toggleCreateIssueOptions();
  }
}

function onCreateClick() {
  toggleCreateIssueOptions();
}

function onEnterInput(e) {
  if (e.keyCode === 13) {
    const issueName = issueInput.value;
    if (!issueName) {
      return;
    }

    const issueCard = document.createElement("div");
    issueCard.className = "card";

    issueCard.innerHTML = `
            <span>${issueName}</span>
            <span class="material-icons" onclick="deleteCard(this)">delete</span>
            `;

    issueInput.value = "";
    issueCard.draggable = true;
    todoContainer.appendChild(issueCard);

    issueCard.addEventListener("dragstart", onDragStart);
    toggleCreateIssueOptions();
  }
}

function deleteCard(deleteButton) {
  const card = deleteButton.parentNode;
  card.remove();
}
