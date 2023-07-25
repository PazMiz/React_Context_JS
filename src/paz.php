<?php
// Enable error reporting (for debugging purposes)
error_reporting(E_ALL);
ini_set('display_errors', '1');

// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost"; // Replace with your database host
$username = "id21043963_pazm"; // Replace with your database username
$password = "J7wg2cxy5da@"; // Replace with your database password
$database = "id21043963_pazdata"; // Replace with your database name

// Create a connection to the database
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Connection successful

// Perform a SELECT query to retrieve data from the 'Product' table
$sql = "SELECT * FROM Product";
$result = $conn->query($sql);

// Check if the query was successful
if ($result) {
    if ($result->num_rows > 0) {
        // Output data of each row in a table with colored styling
        echo "<table style='border-collapse: collapse;'>";
        echo "<tr style='background-color: #f2f2f2;'><th>ID</th><th>Name</th><th>Price</th><th>Category</th></tr>";
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td style='border: 1px solid #ddd; padding: 8px;'>" . $row["id"] . "</td>";
            echo "<td style='border: 1px solid #ddd; padding: 8px; color: blue;'>" . $row["name"] . "</td>";
            echo "<td style='border: 1px solid #ddd; padding: 8px; color: green;'>" . $row["price"] . "</td>";
            echo "<td style='border: 1px solid #ddd; padding: 8px; color: red;'>" . $row["category"] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "No products found.";
    }
} else {
    echo "Error: " . $conn->error;
}

// Close the connection
$conn->close();
?>
