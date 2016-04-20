$(document).ready(function()
{   
    function IniciarAnimacion()
    {
        var verticalPos = $('#vertical').position().top - $('#cuadro').height();
        var horizontalPos = $('#horizontal').position().left - $('#cuadro').width();
        
        $( "#cuadro" ).animate({
            top: verticalPos, 
            width: 100         
        }, 5000, function() {
            $( "#cuadro" ).delay( 500 ).animate({
                left: horizontalPos,
                width: 50
            }, 5000, function() {
                $(this).css('background', 'rgb(140, 240, 220)');
            });
        });
        
        $('body').animate({
            scrollTop: $(document).height()            
        }, 5000);   
    } 
    
    IniciarAnimacion();
    
});