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

  SQLconnection.connect(function(error){
      if (error){console.log("CONNECTION ERROR")}
        else {console.log("CONNECTION SUCCESSFUL")}
  });

  function shop () {

    SQLconnection.query("SELECT * FROM products", function(error, result){
        //console.log(result);
        //console.log(error);
        if(error){console.log("ERROR"); return;}

        console.log("Welcome to Bamazon! Here are the items we recommend for you: ")

        for(var i =0; i<result.length; i++){
            var currentItem = "id: " + result[i].item_id+ " name: " + result[i].product_name 
            + "price: $" + result[i].price;
            console.log(currentItem);
        }
        console.log("");
        inquirer.prompt([
            {
            type: "input",
	  		name: "id",
	  		message: "Enter the ID of the product you'd like to buy:",
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
            var itemID = response.id;
            var  quantityDesired = response.quantityDesired;

            var counter;
            for(counter = 0; counter<result.length; counter++){
                //console.log(counter + ": " + result[counter].item_id);
                if (itemID == result[counter].item_id){break;}
            }
            if(counter >= result.length){console.log("Invalid Item ID."); return;}
            if(quantityDesired > result[counter].stock_quantity){console.log("Insufficient stock."); return;}

            SQLconnection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [quantityDesired, itemID]);
            var amountDue = result[counter].price * quantityDesired;
            console.log("Your purchase cost $" + amountDue + ". Have a nice day!");

        })
    })
  }

  shop();
  