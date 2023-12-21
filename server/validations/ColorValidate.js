const possibleColors = new Set(["black", "white", "blue"]);

const colorValidate = (color) => {
    return possibleColors.has(color.toLowerCase());
}

module.exports = colorValidate;