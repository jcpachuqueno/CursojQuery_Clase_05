$(function() {
    console.log('Init');
    $('a').click(function(event)
    {
        event.preventDefault();
        var href = $(this).attr('href');
        doAjaxRequest(href);        
    });
    
    function doAjaxRequest(archive)
    {
        $.ajax({
            url: "parciales/" + archive,
            context: document.body
        }).done(function(response) 
        {
            $('#contenido').text('');
            $('#contenido').addClass( "done" );
            
            
            llenarElContenidoDeAcuerdoAlLaRespuesta(response);
        }); 
    }
    
    function llenarElContenidoDeAcuerdoAlLaRespuesta(response)
    {
        var responseType = typeof response;
        
        if(responseType === typeof {})
            parsearJSON(response);
            
        else if(responseType === typeof "string")
            insertarHTML(response);
            
        else
            console.log('No se reconoce el tipo de archivo');
    }
    
    function parsearJSON(object)
    {
        //console.log('parsear JSON');
        var menuItem = object.menu.popup.menuitem;
        for(var i = 0; i < menuItem.length; ++i)
        {
            var item = menuItem[i];
            var $div = $('<div/>').addClass('item');
            for(var key in item) 
            { 
                var value = item[key];
                $div.append('<p>' + key + ': <span>' + value + '</span></p>');                
            }
            
            $('#contenido').append($div);
            
        }
    }
    
    function insertarHTML(html)
    {
        //console.log('insertar html');
        $('#contenido').html(html);
    }
    
    function Init()
    {
        doAjaxRequest('inicio.html');
    }
    
    $(document).ajaxStart(function()
    {
        //console.log('Start');
        //$(this).html("<img src='demo_wait.gif'>");
        $('#container').addClass('onStart');        
    });
    
    $(document).ajaxSuccess(function()
    {
        $('#container').removeClass('onStart');
        $('#container').addClass('success');
        setTimeout(RemoveSuccessClass, 1000);
    });
    
    function RemoveSuccessClass()
    {
        $('#container').removeClass('success');
    }
    
    Init();
});