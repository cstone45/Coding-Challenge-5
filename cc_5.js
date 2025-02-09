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

//Task 3: Array Manupulation (push,pop,shift,unshift)
let cartItems = ["Apples", "Oranges", "Watermelon"]; //Declares Product Array
cartItems.push("Soap"); //Adds Soap to the end of the Product List
cartItems.pop(); //Removes Soap (the last item) from the Product List
cartItems.unshift("Bread"); //Adds bread to the beginning of the Product List
cartItems.shift(); //Removes bread (the first item) from the Product List
console.log("Final Product List:", cartItems) //Logs final list to the console

//Task 4: Map Method
let prices = [100, 200, 300]; //Declares an Array containing the initial prices
let discount = prices.map(num => num - (num * 0.10)) //Applies the 10% discount to the prices and subtracts the Discount Value from the Original Price to find the Discounted Price
console.log("The New Prices After a 10% Discount is Applied are:", discount); //States the new Prices found as a result of the .map Operation and creates a descriptive sentence for it which is displayed in the console