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
/*
$database = new medoo([
    'database_type' => 'mysql',
    'database_name' => 'busca903_mrChat',
    'server' => 'localhost',
    'username' => 'busca903_admin',
    'password' => '@gmail.com',
    'charset' => 'utf8'
]);