$(document).ready(function()
{    
    var lastTime = Date.now();
    setInterval(function()
    {
        var now = Date.now();
        var lapsoTiempo = now - lastTime;
        $('#parpadear').css('background', 'rgb(250, 30, 30)');
        if(lapsoTiempo > 500)
        {
            lapsoTiempo = 0;
            $('#parpadear').css('background', 'rgb(250, 220, 10)');
            console.log('Lapso de Tiempo');
            lastTime = now;
        }
        
    }, 1000/30);        
});
