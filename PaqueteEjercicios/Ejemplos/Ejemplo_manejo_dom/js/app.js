$(document).ready(function()
{
    var $titulo = $('<h2/>');
    $titulo.attr('class', 'titulo'); 
        
    var $padre = $('#head');
    $titulo.appendTo($padre);
    
    $titulo.text('Título');
    
    //$titulo.remove();
});