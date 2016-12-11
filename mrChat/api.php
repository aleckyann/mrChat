<?php require_once('../Medoo/Conn.php');

switch ($_POST['action']) {

    case 'enviaMensagem':
        $meuId = $_POST['meuId'];
        $idDoContato = $_POST['idDoContato'];
        $mensagem = $_POST['mensagem'];
        $database->insert('chat',['de' => $meuId, 'para' => $idDoContato, 'mensagem' => $mensagem]);
        break;


    case 'listaUsuarios':
        $usuarios = $database->select('users',['id', 'email']);
        echo json_encode($usuarios);
        break;

    
    case 'listaMensagem':
        $meuId = $_POST['meuId'];
        $idDoContato = $_POST['idDoContato'];
        $mensagens = $database->select('chat', ['mensagem', 'datetime', 'de', 'para'], [ 'AND' => ['de' => [$meuId, $idDoContato], 'para' => [$meuId, $idDoContato] ] ]);
        echo json_encode($mensagens);
        break;

}