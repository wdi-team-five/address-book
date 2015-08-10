$(function(){
  'use strict'
  var sa = 'http://jsonplaceholder.typicode.com/users';

  function showProfiles = function (data) {
    var listAddresses = Handlebars.compile($('#').html());
    $('#').html(listAddresses(data.profile));
  }

});
