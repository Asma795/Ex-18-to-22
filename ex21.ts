//* They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define types for the items
type Item = {
    name: string;

    price: number;
};

// Create objects containing items
let item1: Item = {
    name: "Jersey",
    price: 999.99,
};

let item2: Item = {
    name: "Book",
    price: 19.99,
};

let item3: Item = {
    name: "Mercurial",
    price: 29.99,
};

// Display the items
console.log("Item 1:", item1);
console.log("Item 2:", item2);
console.log("Item 3:", item3);
