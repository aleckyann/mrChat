<?php $meuId = '2'; ?> <!-- TROQUE PELA SESSÃO -->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
    <script src="jquery/jquery.min.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
</br>

    <section class="container">
        <div class="col-md-3 col-sm-offset-9">
            <div id="usuarios"></div>
        </div>

        <div class="col-md-3 col-sm-offset-9 thumbnail" style="height:20em;overflow:auto;">
            <div id="msg"></div>
        </div>
        
        <div class="col-md-3 col-md-offset-9">
            <input class="form-control" id="mensagem" type="text" placeholder="Escreva sua mensagem"></input>
            </br>
            <button class="btn btn-success btn-block" id="enviaMensagem">Enviar</button>
        </div>
    </section>
    
    <script src="main.js"></script>
    <script>
        listaUsuarios('<?= $meuId ?>'); 
    </script>
</body>
</html>