(function ( $ ) 
{

    $.fn.miPlugin = function( options ) {
             
        /*var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );*/    
          
        //var InitLinksContainersWidth = function()
        //{
        console.log(this.width());
        console.log(this.text());
        
        this.each(function () 
        {            
            var width = $(this).width();
            $(this).css('display' , 'block');
            $(this).css('min-width', width + 60);
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
            
            /*for(var i = 0; i < $links.length; ++i)
            {
                var $link = $($links[i]);
                var $parent = $link.parent();
                var height = $link.height();
                $parent.css('height', height);
                $parent.css('width', 0);                
            }*/
            
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
            /*$(this).parent().animate({
                width: 0
            }, {
                duration: 500,
                queue: false
            });*/
                
            $(this).siblings().animate({
                width: 0
            }, 500);
                
            $(this).siblings().css({
                'transition': 'background .3s ease-in',
                'background': 'none',
                'transition-delay': '.8s',
            });
                
                
        });                   
        
        /*return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
            });
        */
        return this;
                                  
    }  
    
}( jQuery ));
