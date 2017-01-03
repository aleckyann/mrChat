<?php

#ATENÇÃO
#Verificar session de usuário, para evitar uso inadequado desta API!

include('Connection.php');
include('../Libs/Filter.php');

switch ($_POST['action']) {

    case 'enviaMensagem':
        $meuId = Filter::postInt('meuId');
        $idDoContato = Filter::postInt('idDoContato');
        $mensagem = Filter::postString('mensagem');
        $database->insert('chat',['de' => $meuId, 'para' => $idDoContato, 'mensagem' => $mensagem]);
        break;


    case 'listaUsuarios':
        $meuId = Filter::postInt('meuId');
        $usuarios = $database->select('users',['id', 'email'], ['AND' => ['id[!]' => $meuId] ]);
        echo json_encode($usuarios);
        break;


    case 'listaMensagem':
        $meuId = Filter::postInt('meuId');
        $idDoContato = Filter::postInt('idDoContato');
        $mensagens = $database->select('chat', ['mensagem', 'datetime', 'de', 'para'], [ 'AND' => ['de' => [$meuId, $idDoContato], 'para' => [$meuId, $idDoContato] ] ]);
        echo json_encode($mensagens);
        break;

}
