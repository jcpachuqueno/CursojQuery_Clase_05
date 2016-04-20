$(document).ready(function()
{
    $('body').mousemove(function(event)
    {
        console.log('move');
        var mouseY = event.clientY;
        
        var $cuadroUno = $('.cuadro').eq(0);        
        var posUno = $cuadroUno.offset().top + $cuadroUno.height();
        
        var $cuadroDos = $('.cuadro').eq(1);
        var posDos = $cuadroDos.offset().top;
        
        if(mouseY < posUno)
        {
            if($cuadroUno.hasClass('cuadro-activo'))
                return;
            
            $('.cuadro-activo p').remove();
            $cuadroUno.siblings().removeClass('cuadro-activo');
            
            $cuadroUno.append('<p>Estoy Activo</p>');                            
            $cuadroUno.addClass('cuadro-activo');            
            
            console.log('Pos Uno');
        }
        
        if(mouseY > posDos)
        {
            if($cuadroDos.hasClass('cuadro-activo'))
                return;
                
            $('.cuadro-activo p').remove();            
            $cuadroDos.siblings().removeClass('cuadro-activo');
            
            $cuadroDos.append('<p>Estoy Activo</p>');                            
            $cuadroDos.addClass('cuadro-activo');
            console.log('Pos Dos');
        }
        
    });    
});