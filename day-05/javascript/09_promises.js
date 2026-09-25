// Promises
const employeePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ id: 1, name: "Aarav" });
    }, 500);
});

employeePromise
    .then(employee => console.log("Employee:", employee))
    .catch(error => console.error("Error:", error));
