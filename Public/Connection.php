<?php
require_once '../Libs/Medoo.php';

$modos = ['desenvolvimento', 'deploy', 'test'];
$use = $modos[0]; #Altere aqui o modo de desenvolvimento 0->desenvolvimento, 1->deploy, 2->test

switch ($use) {
  case $modos[0]:
    $database = new medoo([
        'database_type' => 'mysql',
        'database_name' => 'mrChat',
        'server' => 'localhost',
        'username' => 'root',
        'password' => 'root',
        'charset' => 'utf8'
    ]);
    break;

  case $modos[1]:
    $database = new medoo([
        'database_type' => 'mysql',
        'database_name' => 'busca903_mrChat',
        'server' => 'localhost',
        'username' => 'busca903_admin',
        'password' => '@gmail.com',
        'charset' => 'utf8'
    ]);
    break;

  case $modos[2]:
    $database = new medoo([
        'database_type' => 'mysql',
        'database_name' => 'mrChat',
        'server' => 'localhost',
        'username' => 'root',
        'password' => 'root',
        'charset' => 'utf8'
    ]);
    break;
}
