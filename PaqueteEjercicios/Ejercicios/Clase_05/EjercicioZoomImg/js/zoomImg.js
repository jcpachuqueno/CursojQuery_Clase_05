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
        
        this.each(function () 
        {            
            var img = $( this );            
            img.css('transform', 'scale(1, 1) rotateY(0deg)');
        });                         
            
        this.hover(function()
        {
            var $this = $(this);
            var transicion = 'all ' + settings.velAnimacionEntrada + ' ' + settings.linAnimacion;
            var transformacion = 'scale(' + settings.escalaX + ', ' + settings.escalaY + ') rotateY(' + settings.rotacion + ')'
            
            $this.css({
                'transition'    : transicion,
                'transform'     : transformacion
            });
        });
            
        this.mouseleave(function()
        {
            var $this = $(this);
            var transicion = 'all ' + settings.velAnimacionSalida + ' ' + settings.linAnimacion;
            $this.css({
               'transition'     : transicion,
               'transform'      : 'scale(1, 1) rotateY(0deg)' 
            });
        });                   
        
        return this;                                  
    }  
    
}( jQuery ));
