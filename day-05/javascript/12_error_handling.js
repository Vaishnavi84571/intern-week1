// Error handling
try {
    const data = JSON.parse('{"name":"Vaishnavi"}');
    console.log(data);
} catch (error) {
    console.error("Invalid JSON:", error.message);
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 2));
} catch (error) {
    console.error(error.message);
}
