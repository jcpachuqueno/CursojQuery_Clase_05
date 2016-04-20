$(document).ready(function()
{
    var seEstaMostrandoElArticulo = false;
    function Init()
    {
        $('#tab-0').addClass('tab-active');
        var tituloInicial = $('#tab-0').text();
        $('#articleTitleContainer .title').text(tituloInicial);
        $('#article-0').addClass('article-active');
    }
    
    $('#tabs div').click(function()
    {
        if(seEstaMostrandoElArticulo) return false;
        cambiarTitulo($(this));
        activarArticuloConAnimacion($(this));
        seEstaMostrandoElArticulo = true;
        setTimeout(function() {seEstaMostrandoElArticulo = false;}, 3000)
    });
    
    function cambiarTitulo($this)
    {
        var index = $this.index();
        var titulo = $this.text();
        $('#articleTitleContainer .title').text(titulo);
        
        seEstaMostrandoElArticulo = false;
    }
    
    function activarArticulo($this) 
    {        
        $('.tab-active').removeClass('tab-active');
        $this.addClass('tab-active');
        
        var index = $this.index();
        $('.article-active').addClass('article-hidden').removeClass('article-active');
        $('#article-' + index).removeClass('article-hidden').addClass('article-active');        
    }
    
    function activarArticuloConAnimacion($this)
    {
        $('.tab-active').removeClass('tab-active');
        $this.addClass('tab-active');
        
        var index = $this.index();
        $('.article-active').slideUp(1500);
        $('#article-' + index).addClass('article-active').delay(1500).slideDown(1500);
    }
    
    Init();
});