var loopAjax;

function enviaMensagem(meuId, idDoContato){
    var mensagem = document.getElementById('mensagem').value;
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
            document.getElementById("mensagem").value =''; //Limpa input de mensagem
        }
    });
}


function listaUsuarios(meuId){
    $.ajax({
        method: "POST",
        url: "mrChat/api.php",
        data: {
            action : 'listaUsuarios',
            meuId
        },
        success : function(resultado){
            resultado = JSON.parse(resultado);
            resultado.forEach(function(result){
                $('#usuarios').append('<p><button class="btn btn-primary btn-sm btn-block" onclick="listaMensagem('+meuId+','+result.id+')">'+result.email+'</button></p>');           
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
            clearTimeout(loopAjax); //Destroi evento com requisições ajax existente.
            loopAjax = setTimeout("listaMensagem("+meuId+", "+idDoContato+")", 4100); //cria loop recursivo
            resultado = JSON.parse(resultado); //cria um objeto com json retornado
            document.getElementById('caixaDeMensagens').innerHTML = ""; //limpa a caixa de mensagens
            document.getElementById("enviaMensagem").setAttribute("onclick", ""); //Limpa envento onclick      
            document.getElementById("enviaMensagem").setAttribute("onclick", "enviaMensagem("+ meuId +","+ idDoContato +")"); //seta envento onclick          
            resultado.forEach(function(result){
                if(result.de == meuId){
                    $('#caixaDeMensagens').append('<p><b class="label label-success"><span class="glyphicon glyphicon-user" aria-hidden="true">Você:</span></b> ' + result.mensagem + '</p></br>');
                } else {
                    $('#caixaDeMensagens').append('<p><b class="label label-primary"><span class="glyphicon glyphicon-user" aria-hidden="true">Contato:</span></b> ' + result.mensagem + '</p></br>');                    
                }
            });
        }
    });
}