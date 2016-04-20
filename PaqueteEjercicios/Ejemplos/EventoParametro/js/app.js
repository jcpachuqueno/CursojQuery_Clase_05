$(document).ready(function()
{
    $('a').click(function(event)
    {
       event.preventDefault();
    });
    
    $('#pos').on('click', function(event)
    {
        console.log(event);            
    });
    
    $('#container').on('mousemove', Callback);    
    function Callback(event)
    {
        console.log('Posicion mouse');
        console.log(event.clientX + '  -  ' + event.clientY);
    }
    
});