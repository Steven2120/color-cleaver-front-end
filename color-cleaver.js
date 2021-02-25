const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

const firstColor = getInput(1);
const secondColor = getInput(2);

if (!isValidPrimary(firstColor, secondColor) || !isValidSecondary(firstColor, secondColor)) {
    console.log("Those are not colors.");
}
if (colorDeconstructor(firstColor)) {
    console.log(colorDeconstructor(firstColor) + " make this color!");
}
if (colorCombinator(firstColor, secondColor)) {
    console.log(colorCombinator(firstColor, secondColor));
}
if (!isValidPrimary(firstColor)) {
    console.log("That is not a primary color.");
}
if (!isValidSecondary(firstColor, secondColor)) {
    console.log("Those are not secondary colors.");
}
