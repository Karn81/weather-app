<?php
header('Content-Type: application/json');

if (!isset($_GET['city'])) {
  echo json_encode(['error' => 'City not provided']);
  exit;
}

$city = urlencode($_GET['city']);
$apiKey = 'b3d31044024d27916dfdcd9a4530b279'; // Replace this
$url = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric";

$response = file_get_contents($url);
if ($response === FALSE) {
  echo json_encode(['error' => 'Could not retrieve data']);
  exit;
}

echo $response;
?>
