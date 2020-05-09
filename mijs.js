    var juego = 0; 
    var contadora = 0;
    var contadorb = 0;
    var aux1 = 0;


    $(document).ready(function() {

    $("#iniciar").on('click', cambiaPantalla);
    $("#sumar1").on('click', function () {sumarUno(1)});
    $("#sumar2").on('click', function () {sumarUno(2)});
    $("#restar1").on('click', function () {restarUno(1)});
    $("#restar2").on('click', function () {restarUno(2)});
    $("#boton1").on('click', function () {juego=24; cambiartipodejuego(); seleccionar(1)});
    $("#boton2").on('click', function () {juego=30; cambiartipodejuego(); seleccionar(2)});
    $(".equipos").on('focus', function () {$(".equipos").attr('placeholder', '')});
    $("#fin").on('click',terminar);
    $("#inicio").on('click',function() {
         $("#pantalla3").removeClass("visible").addClass("invisible");
         terminar()});



    function ganador (n) {
        $("#pantalla3").removeClass("invisible").addClass("visible");
         $("#pantalla2").removeClass("visible").addClass("invisible");
         $("#ganador").text($("#equipo"+n).val()+' ha ganado la partida');

    }

    function terminar () {
        juego=0;
        contadora=0;
        contadorb=0;
        aux1=0;
        $("#equipo1").val('');
        $("#equipo2").val('');
        $("#pantalla2").removeClass("visible").addClass("invisible");
        $("#pantalla1").removeClass("invisible").addClass("visible");
        $("#equipo1").attr('placeholder','Nombre y color-Equipo1');
        $("#equipo2").attr('placeholder','Nombre y color-Equipo1');
        for (i=1; i<=12; i++) {
            $("#img"+i).attr('src', 'img/0.png')
        }
        $("#contador1").text(0);
        $("#contador2").text(0);
    };




    function cambiaPantalla () {
       
        $("#pantalla1").removeClass("visible").addClass("invisible");
        $("#pantalla2").removeClass("invisible").addClass("visible");
        cambiaEquipos();
        cambiaColor();
    };

    function cambiartipodejuego(){
        $("h3").text("A "+juego );
    };

    function seleccionar (n) {
        $("#iniciar").css('background-color','#e3b100');
        if (n==1) {
            $("#boton1").css('background-color', '#138900');
            $("#boton2").css('background-color', '#FFFFFF');
        }else {
            $("#boton2").css('background-color', '#138900');
            $("#boton1").css('background-color', '#FFFFFF');
        }
    };

    function sumarUno (num) {
      
        switch (num) {
            case 1:
                if (contadora<juego) {
                    contadora++;
                    $("#contador1").text(""+contadora);
                    if (juego==30){pintar30(contadora,1,6)}
                    else {pintar24(contadora,1,3,1)};
                        if (contadora==juego){
                        ganador(1);
                        $("#contador1").text(""+juego);}
                    }

                      
                break;
            case 2:
                if (contadorb<juego) {
                    contadorb++;
                    $("#contador2").text(""+contadorb);
                    if (juego==30){pintar30(contadorb,7,12)}
                    else {pintar24 (contadorb,7,9,7)};
                    if (contadorb==juego) {
                        ganador(2);
                        $("#contador2").text(""+juego);
                    }
                }
                break;
            default:
                break;
        }
    };

        

    function restarUno (num) {
            switch (num) {
            case 1:
                 if (contadora>0) {
                    contadora--;
                    $("#contador1").text(""+contadora);
                    if (juego==30){pintar30(contadora,1,6)}
                    else {pintar24 (contadora,1,4,1)};
                    
                }
                
                

                break;
            case 2:
                if (contadorb>0) {
                    contadorb--;
                    $("#contador2").text(""+contadorb);
                    if (juego==30) {pintar30(contadorb,7,12)}
                        else {pintar24(contadorb,7,10,7)}
                }
                break;
            default:
                break;
            }
        };
           

    function cambiaEquipos () {
        $("#nombre1").text($("#equipo1").val());
        $("#nombre2").text($("#equipo2").val());
          };


    function pintar30 (a,de,hasta) {
            
            aux1= a;
            
           for (i=de; i<=hasta; i++) {
            
                if (aux1>=5) {
                $("#img"+i).attr('src', 'img/5.png');
                aux1= aux1-5;
                }else {
                    switch (aux1) {
                        case 4:
                        $("#img"+i).attr('src', 'img/4.png');
                        aux1= aux1-4;
                        break;
                        case 3:
                        $("#img"+i).attr('src', 'img/3.png');
                        aux1= aux1-3;
                        break;
                        case 2:
                         $("#img"+i).attr('src', 'img/2.png');
                        aux1= aux1-2;
                        break;
                        case 1:
                         $("#img"+i).attr('src', 'img/1.png');
                        aux1= aux1-1;
                        break;
                        case 0:
                         $("#img"+i).attr('src', 'img/0.png');
                        



                    }
                }
                

                }
            };
        
           


     





    function pintar24(a,de,hasta,img) {
        if (a<=12){
            pintar30(a,de,hasta)
        }else{
            $("#img"+img).attr('src', 'img/5.png');
            $("#img"+(img+1)).attr('src', 'img/5.png');
            $("#img"+(img+2)).attr('src', 'img/2.png');
           
            a = a-12;
            pintar30(a,de+3,hasta+3)

        }

    };

    function cambiaColor() {
        $("#sumar1").css('background-color', $("#color1").val());
        $("#sumar2").css('background-color', $("#color2").val());
        $("#restar1").css('background-color', $("#color1").val());
        $("#restar2").css('background-color', $("#color2").val());
    };


    })











