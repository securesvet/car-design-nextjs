const possibleWheels = new Set(["default", "new"]);

const wheelValidate = (wheel) => {
    return possibleWheels.has(wheel.toLowerCase());
}

module.exports = wheelValidate;