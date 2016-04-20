
$(document).ready(function()
{
    var $todosLosLinks = $('a');
    console.log($todosLosLinks);    
    
    var $todosLosDivs = $('div');
    console.log($todosLosDivs);
    
    var $objetoId = $('#head');
    console.log($objetoId);
    
    var $todosLosDeLaClase = $('.seccion-body');
    console.log($todosLosDeLaClase);
    
    var $todosLosHijos = $('#body section');
    console.log($todosLosHijos);
    
    $('#objeto').click(function()
    {
        console.log("Click");        
        console.log($(this));        
    });
});