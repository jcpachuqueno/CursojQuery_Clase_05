$(document).ready(function()
{        
    $('.button').click(function()
    {           
        var id = $(this).attr('id');
        var idNumber = id.substr(7);
        var idAModificar = 'contenido' + String(idNumber);         
        $('#' + idAModificar).css('background', '#EE6');
        $('#' + idAModificar).siblings().css('background', '#EEE');
    });    
    $('#contenidoUno').css('background', '#EE6');
});