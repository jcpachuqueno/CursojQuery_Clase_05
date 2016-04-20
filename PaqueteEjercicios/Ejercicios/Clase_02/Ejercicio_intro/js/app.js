$(document).ready(function()
{        
    $('.cuadro').click(function(e)
    {
        $(this).text("Adiós"); 
        //$(this).delay( 400 ).slideUp( 1800 );
        $(this).delay( 400 ).animate({width:'toggle'}, 1800);
    }); 
});