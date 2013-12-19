jQuery(function () {
  "use strict";

  var YAML = require('json2yaml')
    , $ = require('jQuery')
    , $events = $('body')
    ;

  $events.on('click', '.js-convert', function () {
    var json = $('.js-json').val()
      , data
      , yml
      ;

    try {
      data = JSON.parse(json);
    } catch(e) {
      console.log(e);
      $('.js-yml').val(
        e.message
      + '\n\n'
      +  e.toString()
      + '\n\n'
      + "Information has been logged to console. If that doesn't help, go validate your YAML at http://yamllint.com to figure out where the error is.\nThen come back here and try again."
      );
      return;
    }

    yml = YAML.stringify(data);
    $('.js-yml').val(yml);
  });

});
