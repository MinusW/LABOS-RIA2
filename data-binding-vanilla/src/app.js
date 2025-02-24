// Simulate JSON data (to be dynamically rendered)
const jsonData = {
    name: "John Doe",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"]
};

// Variable assignment binding
function bindName() {
    const nameElement = document.getElementById("name");
    nameElement.textContent = jsonData.name; // Assign the name directly
}

// Looping through data and binding it
function bindItems() {
    const itemsContainer = document.getElementById("items-list");
    itemsContainer.innerHTML = ''; // Clear existing items

    jsonData.items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item; // Create a new list item for each element
        itemsContainer.appendChild(listItem);
    });
}

// Call functions to bind data to DOM
bindName();
bindItems();
