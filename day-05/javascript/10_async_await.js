// async/await
function getEmployee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 2, name: "Priya", department: "HR" });
        }, 500);
    });
}

async function showEmployee() {
    try {
        const employee = await getEmployee();
        console.log(employee);
    } catch (error) {
        console.error("Error:", error);
    }
}

showEmployee();
