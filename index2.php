<?php $meuId = '2'; ?> <!-- TROQUE PELO ID DE SESSÃO -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title><?= $meuId ?></title>
    <script src="Libs/Jquery.min.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="mrChat.css">
</head>
<body>

    <div class="page-header container">

        <section class="mrChat-box"></section>
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

    <script src="Public/Main.js"></script>
    <script>
        listaUsuarios('<?= $meuId ?>');
    </script>
</body>
</html>
