//* Seeing the World: Think of at least five places in the world you’d like to visit.

//Store the locations in a array. Make sure the array is not in alphabetical order.
let locale: string[] = ["Saud Arabia", "Finland", "Turkey", "Paris", "London"];

//• Print your array in its original order
console.log(locale);

//  Print your array in alphabetical order without modifying the actual list
const alpha = locale.sort();
console.log(alpha);

// Show that your array is still in its original order by printing it
console.log(locale);

// Print your array in reverse alphabetical order without changing the order of the original list.
let reverse = locale.reverse();
console.log(reverse);
