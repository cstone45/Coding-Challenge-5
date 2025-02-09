//Task 1: Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
}; // Declared Object Properties
for (let key in customer) {
    console.log(`${key}: ${customer[key]}`);
} //Logs the Properties to be displayed in the Console