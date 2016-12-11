<?php $meuId = '1'; ?>
<?php $idDoContato = '2'; ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
    <script src="jquery/jquery.min.js"></script>
    <link rel="stylesheet" href="izitoast/css/iziToast.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
    </br>

    <div class="container">
        <textarea class="form-control" id="mensagem" placeholder="Escreva sua mensagem"></textarea>
        </br>
        <button class="btn btn-success btn-block" onclick="enviaMensagem(<?= $meuId ?>, <?= $idDoContato?>)">Enviar</button>
    </div>

    <hr>

    <div class="container">
        <div class="alert" role="alert" style="width:600px;height:300px;background-color:#F2F2F2;overflow:auto;">
            <div id="msg"></div>
        </div>  
    </div>
    
    <script src="main.js"></script>
</body>
</html>