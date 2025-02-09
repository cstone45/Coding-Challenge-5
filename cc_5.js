//Task 1: Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
}; // Declared Object Properties
for (let key in customer) {
    console.log(`${key}: ${customer[key]}`);
} //Logs the Properties to be displayed in the Console

//Task 2: Object Methods
let order = {
    orderID: 12345, //Sets OrderID to 12345
    totalAmount: 150, //Sets Total Amount to 150 Units
    status: "Processing", //Sets Stauts as Processing
    displayOrder: function() {
        return `OrderID ${this.orderID} contains ${this.totalAmount} orders and is ${this.status}`;
    } //Defines displayOrder function to display results
};
console.log(order.displayOrder()) //Calls function and displays results in console