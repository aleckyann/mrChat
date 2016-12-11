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


function listaUsuarios(){
    $.ajax({
        method: "POST",
        url: "mrChat/api.php",
        data: {
            action : 'listaUsuarios',
        },
        success : function(resultado){
            console.log(resultado);            
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
            setTimeout("listaMensagem("+meuId+", "+idDoContato+")", 3000);

            resultado = JSON.parse(resultado);
            $('#msg').text('');
            resultado.forEach(function(result){
                if(result.de == meuId){
                    $('#msg').append('<p align="right" class="text-success"><b>Eu: </b>' + result.mensagem + '</p>');
                } else {
                    $('#msg').append('<p align="left" class="text-primary"><b>Contato: </b>' + result.mensagem + '</p>');                    
                }
            });
            $('#msg').scrollBotton($('#msg').prop("scrollHeight"));
        }
    });
}

