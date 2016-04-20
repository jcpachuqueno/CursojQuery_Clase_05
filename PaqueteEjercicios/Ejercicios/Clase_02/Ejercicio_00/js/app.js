$(document).ready(function()
{
     $('.button').click(function()
     {
         //var id = $(this).index();         
         var id = $(this).attr('id');
         var idNumber = id.substr(7);
         var idAModificar = 'contenido' + String(idNumber);         
         $('#' + idAModificar).css('background', 'red');         
     });
});