$(document).ready(function()
{   
    $('#nav ul li a').click(function(event)
    {
        event.preventDefault();
        var indexChild = $(this).parent().index();   
        var target = $($('.articulo')[indexChild]); 
           
        var offsetTop = target.offset().top - 60;
        console.log(target);
        window.scrollTo(0, offsetTop);
    });          
    
    $(window).on('mousemove', function(event)
    {
        if($('#menuContainer').hasClass('menu-inactivo'))
            $('#menuContainer').removeClass('menu-inactivo');
       lastTime = Date.now();
    });
    
    $('#explorar').mouseover(function(event)
    {
        if($('#menuContainer').hasClass('mouse-over'))
            return;
        
        console.log('over');
        $( "#liSignUp" ).animate(
            {
                width: 100
            }, 700);
        $('#menuContainer').addClass('mouse-over');
    });
    
    $('#menuContainer').mouseleave(function(event)
    {
        if($(this).hasClass('mouse-over'))
            $(this).removeClass('mouse-over');
            
        if(!$(this).hasClass('menu-activado'))
            return;
            
        console.log('out');
        $( "#liSignUp" ).animate(
            {
                width: 0
            }, 700);           
    });
    
    var now = 0;
    var lastTime = Date.now();
    setInterval(Tick, 1000/5);
    
    function Tick()
    {
        now = Date.now();
        var interval = now - lastTime;
        if(interval > 1400)
        {
            if(!$('#menuContainer').hasClass('menu-activado'))
                return;
                
            if($('#menuContainer').hasClass('mouse-over'))
                return;     
                
            if(!$('#menuContainer').hasClass('menu-inactivo'))
                $('#menuContainer').addClass('menu-inactivo');
        }
    }        
    
    $(window).on('scroll', function(event)
    {        
        actualizarIntervaloDeTiempo();
        revisarSiHaLlegadoAlTope(event);
        revisarSiAlcanzoAlgunaSeccion(event);        
        revisarAncla(event);
    });
    
    function actualizarIntervaloDeTiempo()
    {
        lastTime = Date.now();
        if($('#menuContainer').hasClass('menu-inactivo'))
            $('#menuContainer').removeClass('menu-inactivo');    
    }
    
    function revisarSiHaLlegadoAlTope(event)
    {
        var $menu = $('#menuContainer');
        var top = $menu.offset().top; 
        if(top > 0 && !$menu.hasClass('menu-activado'))
        {
            $menu.toggleClass('menu-activado');
            console.log("Entrar");
            $( "#liSignUp" ).animate(
            {
                width: 0
            }, 700);
        }
        else if(top === 0)
        {
            $menu.toggleClass('menu-activado');
            console.log("Normal");
            $( "#liSignUp" ).animate(
            {
                width: 100
            }, 700);
        }
    }
    
    function revisarSiAlcanzoAlgunaSeccion(event)
    {
        var $menu = $('#menuContainer');
        var menuTop = $menu.offset().top;
        
        var inicioTop = $('#inicio').offset().top;
        var desarrolloTop = $('#desarrollo').offset().top;
        var contactoTop = $('#contacto').offset().top;        
        
        if(menuTop > contactoTop - 100)
        {
            $li = $($('#nav ul li')[2]);
            if(!$li.hasClass('nav-li-activo')) 
            {           
                $li.siblings().removeClass('nav-li-activo');
                console.log('In contacto');
                $li.toggleClass('nav-li-activo');
            }
        }
        else if(menuTop > desarrolloTop - 100)
        {
            $li = $($('#nav ul li')[1]);
            if(!$li.hasClass('nav-li-activo'))
            {       
                $li.siblings().removeClass('nav-li-activo');     
                console.log('In desarrollo');
                $li.toggleClass('nav-li-activo');
            }
        }
        else if(menuTop > inicioTop - 100)
        {
            $li = $($('#nav ul li')[0]);
            if(!$li.hasClass('nav-li-activo')) 
            {     
                $li.siblings().removeClass('nav-li-activo');      
                console.log('In inicio');
                $li.toggleClass('nav-li-activo');
                
            }
        }
        else if(menuTop < inicioTop - 100)
        {
            $li = $($('#nav ul li')[0]);
            if($li.hasClass('nav-li-activo'))
                $li.removeClass('nav-li-activo');
        }
    }
    
    function revisarAncla(event)
    {
        var anclaTop = $('#ancla').offset().top;
        
        var inicioTop = $('#inicio').offset().top;
        var desarrolloTop = $('#desarrollo').offset().top;
        var contactoTop = $('#contacto').offset().top;        
        
        if(anclaTop > contactoTop + 200 && !$('#contacto p').hasClass('texto-mostrado'))
        {
            $('#contacto p').addClass('texto-mostrado');
            $('#contacto p').fadeIn( "slow" );
        }
        else     
        if(anclaTop > desarrolloTop + 200 && !$('#desarrollo p').hasClass('texto-mostrado'))
        {
            $('#desarrollo p').addClass('texto-mostrado');
            $('#desarrollo p').fadeIn( "slow" );
        }
        else     
        if(anclaTop > inicioTop + 200 && !$('#inicio p').hasClass('texto-mostrado'))
        {
            $('#inicio p').addClass('texto-mostrado');
            $('#inicio p').fadeIn( "slow" );                        
        }
    }    
});
