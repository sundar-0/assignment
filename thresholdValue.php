<?php
function filterByThreshold($data, $threshold) {
    $filtered = array();

    foreach ($data as $item) {
        if ($item['price'] > $threshold) {
            $filtered[] = $item;
        }
    }

    return $filtered;
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
$result = filterByThreshold($data, $threshold);

// Output the filtered list
foreach ($result as $item) {
    echo 'ID: ' . $item['id'] . ', Price: ' . $item['price'] . PHP_EOL;
}
?>
