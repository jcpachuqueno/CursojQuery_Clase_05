$(document).ready(function()
{
    $('.button').click(function()
    {
        $('#listaDeFrutas').append('<li><p>Fruta</p></li>');    
    });
    
    $('#listaDeFrutas li').on('click', function()
    {
        alert('Hola yo soy una ' + $(this).text());                
    });
    
    /*$('#listaDeFrutas').on('click', 'li', function()
    {
        alert('Hola yo soy una ' + $(this).text());                
    });*/
    
    
});