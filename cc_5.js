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

//Task 5: Filter Method
let inventory = [10, 7, 0, 3, 4, 0]; //Declares the initial Inventory array which contains zeros
let stock = inventory.filter(inventory => inventory >= 1); //Creates the filter formula which will filter out all of the zeros in the Inventory array to create the new array, "Stock", which removes all zeros from the initial array
console.log(stock); //Logs the Array "Stock" to the console

//Task 6: Reduce Method
let sales = [500, 300, 200, 400]; //Declares the Initial Array of Sales
let totalRevenue = sales.reduce((sum, sale) => sum + sale, 0); //Creates the addition formula which will add all of the Sales in the Array to generate a Total Revenue
console.log(`Total Sales Revenue is Equal to: $${totalRevenue}`); //Logs the Total Revenue as a Template Literal which allows the Total to be labeled and appear more organized

//Task 7: find() Method
let customers = ["Alice", "Bob", "Charlie", "David"]; //Establishes the Array which contains the names of the customers
const found = customers.find(customer => customer === "Charlie"); //Establishes the find() Method and sets the target as Charlie in order to make the code identify Charlie as the customer it is seeking
console.log(`The Customer Identified by the Search Parameters is: ${found}`); //Logs the Method in the console as well as a descriptive sentence so that the results of the code are clearly logged and displayed in the console

//Task 8: Function Declaration
function calculateTax(amount) {
    return amount * 0.20;
}                                //Establishes the calculateTax function and outlines the math it will complete in order to calculate the tax on a specified amount
console.log(`The Calculated Tax on an Item costing $2000 is: $${calculateTax(2000)}`) //Logs the function to the console and identifies the amount the Tax is being calculated from so that the Tax is displayed in the console