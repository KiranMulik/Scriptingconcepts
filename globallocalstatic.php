<?php
$globalVar = "I am Global";

function testScope() {
    $localVar = "I am Local";
    static $staticVar = 0;  

    echo "--- Inside the function ---<br>";
    
    global $globalVar;
    echo "Global: " . $globalVar . "<br>";
    
    echo "Local: " . $localVar . "<br>";
    
    $staticVar++;
    echo "Static Count: " . $staticVar . "<br><br>";
}

testScope();
testScope();

echo "--- Outside the function ---<br>";
echo "Global: " . $globalVar . "<br>";

 echo "Local: " . $localVar; //error
?>