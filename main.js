const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");


// Form submit evnet
form.addEventListener("submit", (e) => {
    // Add new item
    addItem(e);

    // Clear the value of textbox
    document.getElementById("item").value = "";
});
// Remove event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItem);


function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById("item").value;

    // Create new li with its className and text node
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    // Create delete button with its className and text node
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to ul
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure?")) {
            let li = e.target.parentNode;
            itemList.removeChild(li);
        }
    }
}

// Filter item
let id;
function filterItem(e) {
    if (id !== undefined) {
        clearTimeout(id);
    }
    id = setTimeout(() => {
        // Convet text to lowercase
        let text = e.target.value.toLowerCase();
        // Get lis
        let items = itemList.getElementsByTagName("li");
        // Convert to an Array
        Array.from(items).forEach(item => {
            let itemName = item.textContent;
            if (itemName.toLowerCase().indexOf(text) !== -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        })
    }, 1000);
}