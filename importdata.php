<?php

date_default_timezone_set('Asia/kathmandu');

$mysqli=new mysqli('localhost:3307','root','');
$createDatabase="create database hamroWeather";
$mysqli->query($createDatabase); //creating database


$mysqli->select_db('hamroWeather'); //selecting database

$createTable="
        create table weather_desc(
            cityName varchar(256) not null,
            weather varchar(256) not null,
            humidity int not null,
            windSpeed float not null,
            pressure int not null,
            temperature float not null,
            date_time datetime not null,
            icon varchar(255),
            windDirection float not null

        )";
$mysqli->query($createTable); //create table in database


$frestData= "SELECT * FROM weather_desc WHERE  date_time >= DATE_SUB(NOW(),INTERVAL 1 HOUR)";
$object=$mysqli->query($frestData);
// var_dump($object);


if($object->num_rows===0)
{
//fetch api from open weather api server
$jsonfile=file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=Dacorum%20District&units=metric&APPID=55c03c2ea53c005ce31986f3c0c51498");
$php_object=json_decode($jsonfile);


$temp=$php_object->main->temp;
$weather=$php_object->weather[0]->description;
$icon=$php_object->weather[0]->icon;
$humidity=$php_object->main->humidity;
$pressure=$php_object->main->pressure;
$name=$php_object->name;
$wind=$php_object->wind->speed;
$direction=$php_object->wind->deg;
$todayDate=date("Y-m-d H:i:s");

$insertIntoTable="insert into weather_desc(
    cityName, weather,humidity,windSpeed,pressure,temperature,date_time,windDirection,icon )
    values
    ('$name','$weather',$humidity,$wind,$pressure,$temp,'$todayDate',$direction,'$icon')";

$mysqli->query($insertIntoTable);// insert data into table
}

?>