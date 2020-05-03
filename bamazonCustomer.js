//Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

// Set up for MySQL database connection
var SQLconnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",  // My username
    password: "J28LYqg66",  // My password
    database: "bamazon"
  });

  function shop () {

    SQLconnection.query("SELECT * FROM products", function(error, result){
        console.log(result);
        console.log(error);
        if(error){console.log("ERROR"); return;}

        console.log("Welcome to Bamazon! Here are the items we recommend for you: ")

        for(var i =0; i<result.length; i++){
            var currentItem = "id: " + result[i].item_id+ " name: " + result[i].product_name 
            + "price: $" + result[i].price;
        }

        inquirer.prompt([
            {
            type: "input",
	  		name: "name",
	  		message: "Enter the name of the product you'd like to buy:",
	  		validate: function(value) {
	  			if(isNaN(value) === false) {
	  				return true;
	  			} else {
	  				return false;
                  }
                }
	  		},
          {
            type: "input",
            name: "quantityDesired",
            message: "How many would you like?",
            validate: function(value) {
                if(isNaN(value) === false && value > 0) {
                    return true;
                } else {
                    return false;
                }
          }
      },
        ]).then(function(response){
            var itemName = response.name.trim();
            var  quantityDesired = response.quantityDesired;

            var counter;
            for(counter = 0; counter<result.length; i++){
                if (itemName === result[i].product_name){break;}
            }
            if(counter >= result.length){console.log("Insufficient stock.")}
        })
    })
  }

  shop();
  