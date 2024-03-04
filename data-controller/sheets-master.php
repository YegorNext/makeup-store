<?php

require __DIR__.'/vendor/autoload.php';

$client = new Google_Client();
$client->setApplicationName('My PHP App');
$client->setScopes([Google_Service_Sheets::SPREADSHEETS]);
$client->setAccessType('offline');
$client->setAuthConfig(__DIR__.'/secret.json'); 
$client->setHttpClient(new \GuzzleHttp\Client(['verify' => false]));

$service = new Google_Service_Sheets($client);
$spreadsheetId = "1JGlKlSfQ7aiCbNJaCtZnE-rqAhRY70hpvyT_sn_Bls8"; 

$range = "Annora_site"; 

$values = [
    ['Data1', 'Data2', 'Data3'],
    ['Data4', 'Data5', 'Data6'],
];

$body = new Google_Service_Sheets_ValueRange([
    'values' => $values
]);

$params = [
    'valueInputOption' => 'RAW'
];

$result = $service->spreadsheets_values->append(
    $spreadsheetId,
    $range,
    $body,
    $params
);

/*if ($result->updates->updatedRows == 2) {
    echo "Data inserted successfully!";
} else {
    echo "Failed to insert data.";
}*/
