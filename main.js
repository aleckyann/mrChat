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
                $('#usuarios').append('<p><button class="btn btn-primary btn-block" onclick="listaMensagem('+meuId+','+result.id+')">'+result.email+'</button></p>');           
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
            clearTimeout(loopAjax);
            loopAjax = setTimeout("listaMensagem("+meuId+", "+idDoContato+")", 3000);

            resultado = JSON.parse(resultado);
            $('#msg').text('');
            resultado.forEach(function(result){
                if(result.de == meuId){
                    $('#msg').append('<p><b class="label label-success"><span class="glyphicon glyphicon-user" aria-hidden="true">Você:</span></b> ' + result.mensagem + '</p></br>');
                } else {
                    $('#msg').append('<p><b class="label label-primary"><span class="glyphicon glyphicon-user" aria-hidden="true">Contato:</span></b> ' + result.mensagem + '</p></br>');                    
                }
            });
        }
    });
}