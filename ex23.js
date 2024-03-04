//* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
var car = "subaru";
for (var i = 0; i < 5; i++) {
    console.log("Is car == 'subaru'? I predict True.");
    console.log(car == "subaru"); // True
}
for (var i = 0; i < 5; i++) {
    console.log("Is car === 'Subaru'? I predict False.");
    console.log(car === "Subaru"); // False
}
