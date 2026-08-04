console.log("JavaScript connected");

const bugList = document.getElementById("bugList");
const bugForm = document.getElementById("bugForm");
const bugTitle = document.getElementById("bugTitle");
const bugDescription = document.getElementById("bugDescription");
const bugPriority = document.getElementById("bugPriority");
const bugStatus = document.getElementById("bugStatus");
const emptyMessage = document.getElementById("emptyMessage");

bugForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const titleValue = bugTitle.value;
    const descriptionValue = bugDescription.value;
    const priorityValue = bugPriority.value;
    const statusValue = bugStatus.value;

    console.log(titleValue);
    console.log(descriptionValue);
    console.log(priorityValue);
    console.log(statusValue);

    emptyMessage.style.display = "none";

    const bugCard = document.createElement("div");
    bugCard.classList.add("bug-card");

    bugCard.innerHTML = `
        <h3>${titleValue}</h3>
        <p>#{descriptionValue}<p>
        <p><strong>Priority:</strong>${priorityvalue}</p>
        <p><strong>Status:</strong> ${statusValue}</p>
    `;

    bugList.appendChild(bugCard);
    bugForm.reset();
});