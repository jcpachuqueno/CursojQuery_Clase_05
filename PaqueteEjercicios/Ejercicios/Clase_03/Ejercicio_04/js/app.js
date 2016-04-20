$(document).ready(function()
{
    $('nav ul li:first').click(function()
    {
        console.log('click 1');  
        irALaSeccion($(this).index());    
        removerActivoDelPasado();
        $(this).addClass('nav-active');  
        insertarSpanActivo($(this))
    });
    
    function insertarSpanActivo($this)
    {
        var $span = $('<span/>');
        $span.text('° ');
        $span.prependTo($this);
    }
    
    $('nav ul li:nth-child(2)').click(function()
    {
        console.log('click 2');
        irALaSeccion(1);
        removerActivoDelPasado();
        $(this).addClass('nav-active');
        $(this).css({'border-right': '2px solid #EEE'});       
        $(this).prepend( "<span class='activo'>° </span>" );
    });
    
    $('nav ul li').eq( 2 ).click(function()
    {
        console.log('click 3');
        irALaSeccion(2);
        removerActivoDelPasado();
        $(this).addClass('nav-active');
        $(this).css({'border-right': '2px solid #EEE'});
        $(this).children().before( "<span class='activo'>° </span>" );
    });
    
    $($('nav ul li')[3]).click(function()
    {
        console.log('click 4');
        irALaSeccion(3);
        removerActivoDelPasado();
        $(this).addClass('nav-active');
        $(this).css('border-right', '2px solid #EEE');
        $(this).prepend( "<span class='activo'>° </span>" );    
    });
    
    $('nav ul li:last').click(function()
    {
        console.log('click 5');
        irALaSeccion(4);
        removerActivoDelPasado();
        $(this).addClass('nav-active');
        $(this).css('border-right', '2px solid #EEE');
        $(this).prepend( "<span class='activo'>° </span>" );
        
    });
    
    function removerActivoDelPasado()
    {
        var $activo = $('.nav-active'); 
        removerEstilosDelNavActivo($activo);
        removerSpanActiveDelNavActivo($activo);
    }
    
    function removerEstilosDelNavActivo($activo)
    {
        $activo.toggleClass('nav-active');
        $activo.css('border-right', 'none');
    }
    
    function removerSpanActiveDelNavActivo($activo)
    {
        var spanActive = $activo.children()[0]; //  objeto javascript
        var $spanActivejQuery = $(spanActive); // objeto jQuery
        if($spanActivejQuery !== undefined)
            $spanActivejQuery.remove();
    }
    
    function irALaSeccion(numSection)
    {
        var height = $(window).height();
        var totalToScroll = numSection * height;
        window.scrollTo(0, totalToScroll);
    }
    
});