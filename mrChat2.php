<?php $meuId = '1'; ?> <!-- TROQUE PELO ID DE SESSÃO -->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
    <script src="jquery/jquery.min.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="mrChat.css">
</head>
<body>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">
                <img alt="mrChat" src="...">
            </a>
            </div>
        </div>
    </nav>
    <hr>
    <div class="page-header container">
        <div class="alert alert-success" role="alert">Ocupar espaço...</div>
        <div class="alert alert-info" role="alert">Ocupar espaço...</div>
        <div class="alert alert-warning" role="alert">Ocupar espaço...</div>
        <div class="alert alert-danger" role="alert">Ocupar espaço...</div>
        <div class="alert alert-success" role="alert">Ocupar espaço...</div>
        <div class="alert alert-info" role="alert">Ocupar espaço...</div>
        <div class="alert alert-warning" role="alert">Ocupar espaço...</div>
        <div class="alert alert-danger" role="alert">Ocupar espaço...</div>
        <div class="alert alert-success" role="alert">Ocupar espaço...</div>
        <div class="alert alert-info" role="alert">Ocupar espaço...</div>
        <div class="alert alert-warning" role="alert">Ocupar espaço...</div>
        <div class="alert alert-danger" role="alert">Ocupar espaço...</div>

    <section class="mrChat-box">
        <div class="mrChat-name">Chat</div>
        <div class="mrChat-usuarios">
            <div id="usuarios"></div>
        </div>

        <div class="mrChat-caixaDeMensagens">
            <div id="caixaDeMensagens"></div>
        </div>

        <div class="mrChat-form">
            <input id="mensagem" type="text" placeholder="Escreva sua mensagem"></input>
            <button class="" id="enviaMensagem">Enviar</button>
        </div>
    </section>    
    
    </div>
    <script src="main.js"></script>
    <script>
        listaUsuarios('<?= $meuId ?>'); 
    </script>
</body>
</html>