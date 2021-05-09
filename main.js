$(function() {
      $( "#submit" ).click(function() {
        var pokemonId = $('#pokeId').val()
        $.ajax({
            type: 'GET',
            beforeSend: function(){
              $('#loadingImg').show();
              $("#submit").prop('disabled', true);
            }
            ,
            url: 'https://pokeapi.co/api/v2/pokemon/'+pokemonId,
            success: function(data){
              $('#output').text(data.forms[0]['name']);
              $('#loadingImg').hide();
              $("#submit").prop('disabled', false);
            },
            error: function() { 
              $('#output').text('Pokemon niet gevonden');
              $('#loadingImg').hide();
              $("#submit").prop('disabled', false);
          }       
        });
      });
});