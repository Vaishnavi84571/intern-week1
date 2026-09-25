"use strict";
function isEmployee(value) {
    return typeof value === "object" && value !== null && "id" in value && "name" in value;
}
function printValue(value) {
    if (isEmployee(value)) {
        console.log(`Employee #${value.id}: ${value.name}`);
    }
    else {
        console.log(`Text: ${value.toUpperCase()}`);
    }
}
printValue({ id: 1, name: "Aarav" });
printValue("TypeScript type guard");
