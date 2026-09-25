// Day 5 - Async / Await

// Promise that resolves after 2 seconds
function getEmployee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "Rahul",
                department: "IT"
            });
        }, 2000);
    });
}


// Async function
async function displayEmployee() {
    console.log("Loading employee...");

    try {
        const employee = await getEmployee();

        console.log("Employee received:");
        console.log(employee);

    } catch (error) {
        console.error("Error:", error);
    }
}


// Start the function
displayEmployee();

console.log("This message appears before the employee data.");