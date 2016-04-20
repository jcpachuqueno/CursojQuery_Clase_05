
$(document).ready(function()
{    
    function Init()
    {
        setHeaderSection();
        setContenidoSection();
    }
    
    function setHeaderSection()
    {
        var $headerTitulo = $('<h2/>').text('Mi comida favorita');;
        var $header = $('<header/>').append($headerTitulo);
        $header.appendTo('#container');
    }
    
    function setContenidoSection()
    {
        var $contenido = getContenido();                
        setContenidoHeadSection($contenido);    
        setExplicacionSection($contenido);
        setIngredientesSection($contenido);
        $contenido.appendTo('#container');
    }
    
    function getContenido()
    {
        var $contenido = $('<div/>');
        $contenido.attr('id', 'contenido');
        return $contenido;
    }
    
    function setContenidoHeadSection($contenido)
    {
        var $contenidoHead = getContenidoHead($contenido);
        setImageHead($contenidoHead);
        setTituloHead($contenidoHead);
    }
    
    function getContenidoHead($contenido)
    {
        var $contenidoHead = $('<div/>');
        $contenidoHead.attr('id', 'contenidoHead');
        $contenidoHead.appendTo($contenido);
        return $contenidoHead;
    }
    
    function setImageHead($contenidoHead)
    {
        var $image = $('<img/>', 
        {
            'src' : 'images/estrujadas.jpg',
            'alt' : 'Imagen de estrujadas'
        });  
        $image.appendTo($contenidoHead);
    }
    
    function setTituloHead($contenidoHead)
    {
        var $tituloArticulo = $('<p/>');
        $tituloArticulo.text('Estrujadas');
        $tituloArticulo.attr('class', 'titulo');    
        $tituloArticulo.appendTo($contenidoHead);
    }
    
    function setExplicacionSection($contenido)
    {
        var $explicacion = getExplicacion($contenido);
        setExplicacionTexto($explicacion);
    }
    
    function getExplicacion($contenido)
    {
        var $explicacion = $('<div/>');
        $explicacion.attr('id', 'explicacion');
        $explicacion.appendTo($contenido);
        return $explicacion;
    }
    
    function setExplicacionTexto($explicacion)
    {
        var $explicacionTexto = $('<p/>').html('Las estrujadas son enchiladas rojas o verdes machacadas, servidas con unos frijoles negros.<br/><br/>Encima de las estrujadas se acostumbra ponerle queso fresco y hay veces que se puede acompañar el plato con un pedazo de carne o pescado.');
        $explicacionTexto.appendTo($explicacion);
    }        
    
    function setIngredientesSection($contenido)
    {
        $ingredientes = getIngredientes($contenido);
        setIngredientesTitulo($ingredientes);
        setIngredientesList($ingredientes);
    }
    
    function setIngredientesTitulo($ingredientes)
    {
        var $ingredientesTitulo = $('<p/>').attr('class', 'subtitulo').text('Ingredientes')
        $ingredientes.append($ingredientesTitulo);
    }
    
    function getIngredientes($contenido)
    {
        var $ingredientes = $('<div/>');
        $ingredientes.attr('id', 'ingredientes');        
        $ingredientes.appendTo($contenido);
        return $ingredientes;
    }
    
    function setIngredientesList($ingredientes)
    {
        var $ul = $('<ul/>');
        setNewIngrediente($ul, '¼ de kilo de Masa');
        setNewIngrediente($ul, 'Manteca de cerdo (1 cucharadita cafetera)');
        setNewIngrediente($ul, 'Queso fresco (espolvoreado al gusto)');
        setNewIngrediente($ul, 'Salsa roja y/o verde');
        $ul.appendTo($ingredientes);
    }
    
    function setNewIngrediente($ul, mensaje)
    {
        var $li = $('<li/>').append($('<p/>').text(mensaje));
        $li.appendTo($ul);
    }
    
    Init();
    
});