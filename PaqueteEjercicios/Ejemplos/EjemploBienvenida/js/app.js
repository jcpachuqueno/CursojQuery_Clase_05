$(document).ready(function()
{
    function InitGrid()
    {
        for(var i = 1; i <= 69; ++i)
        {
            var clone = $('#cuadroToClone').clone();
            clone.text(i);
            clone.appendTo('#container');
            
            clone.hover(function(e)
            {
                $(this).siblings().css({"background": "#333", "color": "#EA6"});
                
                
                for(var i = 0; i < $(".cuadro").length; ++i)
                {
                    var number = Number($(this).text());
                    
                    if(number !== 0 && i % number === 0 )
                    {
                        var sibling = $(".cuadro")[i];
                        $(sibling).css({"background": "#333", "color": "#59A"});
                    }
                }
                                
                $(this).css( "background", "#59A" ); 
                $(this).css( "box-shadow", "inset 0 0 0 10px #333");
                $(this).css( "color", "#E65");
            },
            function(){
                $(this).css("background", "#444");
                $(this).css( "box-shadow", "inset 0 0 0 3px #CCC");
                $(this).siblings().css({"background": "#444", "color": "#EEE"});
                $(this).css( "color", "#EEE");
            });            
            
            clone.click(function(e)
            {
               $(this).text("boom"); 
               $(this).delay( 400 ).fadeOut( 1800 );

            });
        }
    }
    
    return InitGrid();
});