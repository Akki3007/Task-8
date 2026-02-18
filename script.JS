// Select input, button and list
let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let ol = document.querySelector("#taskList");

// Run when button is clicked
button.addEventListener("click", () => {
    const taskValue = input.value;

    

    // Create new list item
    let li = document.createElement("li");

    // Add text and style
    li.innerText = taskValue;
    li.style.listStylePosition = "inside";
    li.setAttribute("class", "active");

    // Add item to list
    ol.append(li);

    // Remove item on click
    li.addEventListener("click", () => {
        li.remove();
    });

    // Clear input box
    input.value = "";
    input.focus();
});
