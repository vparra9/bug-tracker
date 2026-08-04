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

    /*Validation so empyty bugs cannot be submitted*/

    if (titleValue.trim() === "" || descriptionValue.trim() === "") {
    alert("Please enter both a bug title and description.");
    return;
    }
    console.log(titleValue);
    console.log(descriptionValue);
    console.log(priorityValue);
    console.log(statusValue);

    emptyMessage.style.display = "none";

    const bugCard = document.createElement("div");
    bugCard.classList.add("bug-card");

    bugCard.innerHTML = `
        <h3>${titleValue}</h3>
        <p>${descriptionValue}</p>
        <p><strong>Priority:</strong> ${priorityValue}</p>
        <p><strong>Status:</strong> ${statusValue}</p>
        <button class="delete-button">Delete</button>
    `;

    const deleteButton = bugCard.querySelector(".delete-button");

    deleteButton.addEventListener("click", function () {
        bugCard.remove();

        if (bugList.querySelectorAll(".bug-card").length === 0) {
            emptyMessage.style.display = "block";
        }
    });

    bugList.appendChild(bugCard);
    bugForm.reset();
});