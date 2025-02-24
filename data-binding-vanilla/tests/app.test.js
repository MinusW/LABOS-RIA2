// app.test.js
const fs = require("fs");
const path = require("path");

describe("Data Binding Tests", () => {
    let html;

    beforeEach(() => {
        // Load the HTML file as a string
        html = fs.readFileSync(path.resolve(__dirname, "../src/index.html"), "utf8");
        document.documentElement.innerHTML = html.toString();
    });

    test("should bind name to the DOM", () => {
        // Set the mock data in jsonData
        const jsonData = { name: "John Doe", items: [] };

        // Bind data
        const nameElement = document.getElementById("name");
        nameElement.textContent = jsonData.name;

        // Test the value of the DOM element
        expect(nameElement.textContent).toBe("John Doe");
    });

    test("should bind items list to the DOM", () => {
        // Set the mock data in jsonData
        const jsonData = { name: "John Doe", items: ["Item 1", "Item 2", "Item 3"] };

        // Loop through items and bind data
        const itemsContainer = document.getElementById("items-list");
        itemsContainer.innerHTML = ''; // Clear existing items

        jsonData.items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            itemsContainer.appendChild(listItem);
        });

        // Test if the items are properly rendered
        const listItems = itemsContainer.querySelectorAll("li");
        expect(listItems.length).toBe(3);
        expect(listItems[0].textContent).toBe("Item 1");
        expect(listItems[1].textContent).toBe("Item 2");
        expect(listItems[2].textContent).toBe("Item 3");
    });
});
