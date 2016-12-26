

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
                $('#usuarios').append('<li class="mrChat-contato text-primary" onclick="listaMensagem('+meuId+','+result.id+')">'+result.email+'</li>');           
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
                    $('#caixaDeMensagens').append('<p class="text-success"><b class="label label-success"><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></b> ' + result.mensagem + '</p>');
                } else {
                    $('#caixaDeMensagens').append('<p class="text-primary"><b class="label label-primary"><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></b> ' + result.mensagem + '</p>');                    
                }
            });
        }
    });
}