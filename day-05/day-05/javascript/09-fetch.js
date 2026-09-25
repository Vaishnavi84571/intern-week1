// Day 5 - Fetch API

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Check if request was successful
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Convert response to JSON
        const users = await response.json();

        console.log("Users received:");

        // Display user names
        users.forEach((user) => {
            console.log(`${user.id}: ${user.name} - ${user.email}`);
        });

    } catch (error) {
        console.error("Failed to fetch users:", error.message);
    }
}

getUsers();