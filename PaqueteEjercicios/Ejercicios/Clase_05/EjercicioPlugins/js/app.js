$(document).ready(function()
{
    console.log('Init');
    jQuery("#miCiudadTitle").fitText();   
   
    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });  
    
     $('.window').windows({
        snapping: true,
        snapSpeed: 500,
        snapInterval: 1100,
        onScroll: function(scrollPos){
            // scrollPos:Number
        },
        onSnapComplete: function($el){
            // after window ($el) snaps into place
        },
        onWindowEnter: function($el){
            // when new window ($el) enters viewport
        }
    });
    
    $(".miPlugin a").miPlugin({ color: 'red' });  
});
