<?php
function calculateTotalSum($data, $threshold) {
    $filtered = array_filter($data, function($item) use ($threshold) {
        return $item['price'] > $threshold;
    });

    $sum = array_reduce($filtered, function($carry, $item) {
        return $carry + $item['price'];
    }, 0);

    return $sum;
}

// Example usage
$data = array(
    array('id' => 1, 'price' => 10),
    array('id' => 2, 'price' => 20),
    array('id' => 3, 'price' => 15),
    array('id' => 4, 'price' => 30),
    array('id' => 5, 'price' => 25),
);

$threshold = 20;
$totalSum = calculateTotalSum($data, $threshold);

// Output the total sum
echo 'Total Sum: ' . $totalSum;
?>
