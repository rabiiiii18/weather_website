<?php
include('importdata.php');
$selectQuery="SELECT* from weather_desc ORDER BY date_time DESC LIMIT 1 ";
$queryResult=$mysqli->query($selectQuery);

$rowData=($queryResult->fetch_assoc());
$jsonFile=json_encode($rowData);
echo ($jsonFile);

?>