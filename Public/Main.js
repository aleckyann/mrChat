var loopAjax;

var sound = new Audio('Sound/alert.ogg');

localStorage.setItem('chat2', null);

function enviaMensagem(meuId, idDoContato){
    var mensagem = document.getElementById('mensagem').value;
    $.ajax({
        method: "POST",
        url: "Public/Api.php",
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
        url: "Public/Api.php",
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
        url : "Public/Api.php",
        data : {
            action : 'listaMensagem',
            meuId,
            idDoContato,
        },
        success : function(resultado){
            clearTimeout(loopAjax); //Destroi evento com requisições ajax existente.
            loopAjax = setTimeout("listaMensagem("+meuId+", "+idDoContato+")", 4100); //cria loop recursivo
            resultado = JSON.parse(resultado); //cria um objeto com json retornado

            //Inicio de testes de aviso de sonoridade
            localStorage.setItem('chat1', resultado);
            if(localStorage.getItem('chat1') == localStorage.getItem('chat2')){
              localStorage.setItem('chat1', null);
            } else {
              sound.play();
              localStorage.setItem('chat2', resultado);
            }
            //fim de testes de aviso de sonoridade

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
