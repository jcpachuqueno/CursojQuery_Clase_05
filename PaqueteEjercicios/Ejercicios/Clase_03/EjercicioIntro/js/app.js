
$(document).ready(function()
{
    
    $('.tarjeta').mouseover(function()
    {
        $(this).addClass('adentro');
        $(this).text('Adentro'); 
    });    
    
    $('.tarjeta').mouseout(function()
    {
        $(this).removeClass('adentro');
        
        if($(this).hasClass('activo'))
            $(this).text('Activado');
        else
            $(this).text('Sin activar');
    });
    
    $('.tarjeta').click(function()
    {
        $(this).toggleClass('activo');        
      
    });
    
});