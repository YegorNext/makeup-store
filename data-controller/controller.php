<?php


$name = isset($_POST['name']) ? $_POST['name'] : "NONE";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "NONE";
$inst = isset($_POST['inst']) ? $_POST['inst'] : "NONE";
$comments = isset($_POST['comments']) ? $_POST['comments'] : "NONE";

$checkTel =  isset($_POST['check-tel']) ? $_POST['check-tel'] : "NONE";
$checkInst =  isset($_POST['check-inst']) ? $_POST['check-inst'] : "NONE";
$checkWhats =  isset($_POST['check-whats']) ? $_POST['check-whats'] : "NONE";
$checkViber =  isset($_POST['check-viber']) ? $_POST['check-viber'] : "NONE";

require 'sheets-master.php';