DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;


CREATE TABLE products (
item_id INTEGER(10),
product_name VARCHAR(100),
department_name VARCHAR(100),
price DECIMAL(4,2),
stock_quantity INTEGER(100)
);

INSERT INTO products VALUES(1864529864, "10 pound dumbell", "exercise equipment", 29.99, 10);
INSERT INTO products VALUES(1864383865, "20 pound dumbell", "exercise equipment", 49.50, 5);
INSERT INTO products VALUES(1864383866, "30 pound dumbell", "exercise equipment", 75.00, 5);
INSERT INTO products VALUES(1864383864, "light resistance band", "exercise equipment", 19.99, 15);
INSERT INTO products VALUES(1864383864, "heavy resistance band", "exercise equipment", 45.00, 10);
INSERT INTO products VALUES(1864363469, "yoga mat", "exercise equipment", 99.99, 5);
INSERT INTO products VALUES(1874637898, "think! protein bar: chocolate", "nutrition", 3.98, 60);
INSERT INTO products VALUES(1874637899, "think! protein bar: peanut butter", "nutrition", 3.98, 60);
INSERT INTO products VALUES(1874637645, "vanilla protein powder", "nutrition", 39.95, 30);
INSERT INTO products VALUES(1874637648, "chocolate protein powder", "nutrition", 39.95, 30);