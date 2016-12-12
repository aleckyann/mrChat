var loopAjax;

function enviaMensagem(meuId, idDoContato){
    var mensagem = $('#mensagem').val();
    $.ajax({
        method: "POST",
        url: "mrChat/api.php",
        data: {
            action : 'enviaMensagem',
            meuId,
            idDoContato,
            mensagem,
        },
        success : function(resultado){
            $('#mensagem').val('');
        }
    });
}


function listaUsuarios(meuId){
    $.ajax({
        method: "POST",
        url: "mrChat/api.php",
        data: {
            action : 'listaUsuarios',
        },
        success : function(resultado){
            resultado = JSON.parse(resultado);
            resultado.forEach(function(result){
                $('#usuarios').append('<p><button class="btn btn-primary" onclick="stopLoopAjax(loopAjax);listaMensagem('+meuId+','+result.id+')">'+result.email+'</button></p>');           
            })
        }
    });
}


function listaMensagem(meuId, idDoContato){
    $.ajax({
        method : "POST",
        url : 'mrChat/api.php',
        data : {
            action : 'listaMensagem',
            meuId,
            idDoContato,
        },
        success : function(resultado){
            var loopAjax = setTimeout("listaMensagem("+meuId+", "+idDoContato+")", 3000);

            resultado = JSON.parse(resultado);
            $('#msg').text('');
            resultado.forEach(function(result){
                if(result.de == meuId){
                    $('#msg').append('<p align="right" class="text-success"><b>Eu: </b>' + result.mensagem + '</p>');
                } else {
                    $('#msg').append('<p align="left" class="text-primary"><b>Contato: </b>' + result.mensagem + '</p>');                    
                }
            });
        }
    });
}


function stopLoopAjax(loopAjax){
    clearTimeout(loopAjax);
}
