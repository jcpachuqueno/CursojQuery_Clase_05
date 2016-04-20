$(document).ready(function()
{
    $('#buttonUno').click(function()
    {
       alert('Click botón Uno'); 
    });
    
    $('#buttonDos').on('click', function()
    {
       alert('Click botón Dos'); 
    });        
    
    $('input').on('focus', function()
    {
        alert('Focus');
    });
            
    $('input').on('keydown', function()
    {
        console.log($(this).val());
    });        
    
});

var OnButtonTresClick = function()
{
    alert('Click botón Tres');
}