<?php
$url = 'http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml';

// Retrieve XML data
$xmlData = file_get_contents($url);

// Convert XML to JSON
$xmlObject = simplexml_load_string($xmlData);
$jsonData = json_encode($xmlObject, JSON_PRETTY_PRINT);

// Output JSON data
header('Content-Type: application/json');
echo $jsonData;
?>






