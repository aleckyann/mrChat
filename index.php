<?php $meuId = '1'; ?> <!-- TROQUE PELO ID DE SESSÃO -->
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

        <div class="col-sm-3 col-sm-offset-9">
          <div class="panel panel-success">
            <div class="panel-heading">Chat</div>
            <div class="panel-body" id="usuarios"></div>
          </div>

          <div class="mrChat-form">
            <input id="mensagem" type="text" placeholder="Escreva sua mensagem"></input>
            <button class="btn btn-sm btn-success" id="enviaMensagem">Enviar</button>
          </div>
          <br>
          <div class="panel panel-primary">
            <div class="panel-heading">
              Box
            </div>
            <div class="panel-body height" id="caixaDeMensagens">
              <small>Selecione um contato...</small>
            </div>
          </div>
        </div>

    </div>

    <script src="Public/Main.js"></script>
    <script>
      listaUsuarios('<?= $meuId ?>');
    </script>

</body>
</html>
