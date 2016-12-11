<?php
require_once 'medoo.php';
 
$database = new medoo([
    'database_type' => 'mysql',
    'database_name' => 'mrChat',
    'server' => 'localhost',
    'username' => 'root',
    'password' => 'root',
    'charset' => 'utf8'
]);