
$('#get-address').on('click', function(){
  var sa = 'http://jsonplaceholder.typicode.com';
  $.ajax({
    url: sa + '/users',
    method: 'GET'
  }).done(function(data) {
    // Chris's function
  });
});

