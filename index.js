/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/** @type {Item[]} */
const inventory = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 5, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
const logNames = (items) => {
  items.forEach((item) => {
    console.log(item.name);
  });
};

/**
 * Returns an array of item names in all uppercase.
 * @param {Item[]} items - array of items
 * @returns {string[]}
 */
const getUppercaseNames = (items) => {
  return items.map((item) => item.name.toUpperCase());
};

/**
 * Returns the item with the given id.
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item}
 */
const getItemById = (items, id) => {
  return items.find((item) => item.id === id);
};

/**
 * Returns the price of an item by its name.
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number|null}
 */
const getItemPriceByName = (items, name) => {
  for (const item of items) {
    if (item.name === name) {
      return item.price;
    }
  }
  return null; // Always return something (null if not found)
};

/**
 * Returns all items that belong to the given category.
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]}
 */
const getItemsByCategory = (items, category) => {
  return items.filter((item) => item.category === category);
};

/**
 * Returns the total quantity of all items.
 * @param {Item[]} items - array of items
 * @returns {number}
 */
const countItems = (items) => {
  return items.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );
};

/**
 * Returns the total price of all items in inventory.
 * @param {Item[]} items - array of items
 * @returns {number}
 */
const getTotalPrice = (items) => {
  return items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );
};

/**
 * Displays the full inventory list on the web page.
 * @param {Item[]} items - array of items
 */
const displayInventory = (items) => {
  const displayDiv = document.getElementById("inventoryDisplay");
  displayDiv.innerHTML = "";

  const ul = document.createElement("ul");

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.category}) - $${item.price.toFixed(
      2
    )} each, Quantity: ${item.quantity}`;
    ul.appendChild(li);
  });

  displayDiv.appendChild(ul);
};

// === READ BUT DO NOT CHANGE THE CODE BELOW ===

console.log("Welcome! We carry the following items:");
logNames(inventory);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(inventory));

console.log(`In total, we have ${countItems(inventory)} items in stock.`);

const totalCost = getTotalPrice(inventory);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(inventory, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(inventory, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(inventory, category));
