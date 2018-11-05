const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, data) {
        if (err) throw err;
        // console.log(data);
        displayProducts();
    });
}

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, data) {
        for (let i = 0; i < data.length; i++) {
            console.log(
                data[i].id + " | " +
                data[i].product_name + " | " +
                data[i].department_name + " | " +
                data[i].price + " | " +
                data[i].stock_quantity
            )
        }
    });
}
