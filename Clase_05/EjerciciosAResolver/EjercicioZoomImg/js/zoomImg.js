(function ( $ ) 
{

    $.fn.imgZoom = function( options ) 
    {             
        var settings = $.extend({
            escalaX :               1.4,
            escalaY:                1.4,
            rotacion:               '25deg',
            velAnimacionEntrada:    '1.4s',
            velAnimacionSalida:     '.5s',
            linAnimacion:           'ease-in'
        }, options );            
        
         
        //Inicializar cada uno de los elementos 
        this.each(function () 
        {            
            $(this).css('border','1px solid green')
        });                         
            
        this.hover(function()
        {
                $(this).css({
                    'transition':'all ' + settings.velAnimacionEntrada + ' ' + settings.linAnimacion,
                    'transform':'rotateY('+ settings.rotacion+') scale(' + settings.escalaX + ', '+ settings.escalaY +')',
                });
                
        });
            
        this.mouseleave(function()
        {
            $(this).css({
                    'transition':'all ' + settings.velAnimacionSalida + ' ' + settings.linAnimacion,
                    'transform':'rotateY(0deg) scale(1, 1)',
                })
        });                   
        
        return this;                                  
    }  
    
}( jQuery ));
