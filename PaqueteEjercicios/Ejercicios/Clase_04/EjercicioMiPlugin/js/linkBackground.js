(function ( $ ) 
{
    $.fn.linkBackground = function( options ) 
    {        
        this.each(function () 
        {            
            var width = $(this).width();
            $(this).css('display' , 'block');
            $(this).css('width', width + 60);
        });        
                    
        var $parent = this.parent();
        $parent.css({
            'position'  : 'relative',
            'width'     :   this.width(),
            'padding'   :   '0 5px 0 5px'
        });                
        
        var $back = this.siblings();
        $back.css({
            'position' :    'absolute',
            'left'      :   '0',
            'right'     :   '0',
            'top'       :   '0',
            'bottom'    :   '0',
            'width'     :   '0',
            'z-index'   :   '-1'
        });        
        
        this.hover(function()
        {
            var c = $(this).parent().attr('color');
            
            $(this).siblings().css({
                'transition': 'background .3s ease-in',            
                'background': c
            });
                
            $(this).siblings().animate({
                width: '100%'
            }, 500);
        });
            
        this.mouseleave(function()
        {
            $(this).siblings().animate({
                width: 0
            }, {
                duration: 500,
                queue: false
            });                
                
            $(this).siblings().css({
                'transition': 'background .3s ease-in',
                'background': 'none',
                'transition-delay': '.8s',
            });
                
                
        });                   
        
        return this;                          
    }  
    
}( jQuery ));
