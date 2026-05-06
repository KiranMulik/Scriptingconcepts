<?php
function sayHello() {
    echo "Hello! Welcome to PHP functions.<br>";
}

function greetUser($name, $timeOfDay) {
    echo "Good $timeOfDay, $name!<br>";
}

function calculateTotal($price, $tax) {
    $total = $price + ($price * $tax);
    return $total;
}


sayHello();

greetUser("Sham", "morning"); 

$finalPrice = calculateTotal(100, 0.05);
echo "The total price is: Rs." . $finalPrice;
?>