jQuery( function($) {

  // wc_city_select_params is required to continue, ensure the object exists
  if ( typeof wc_city_select_params === 'undefined' ) {
    return false;
  }

  /* City select boxes */
  var cities_json = wc_city_select_params.cities.replace( /&quot;/g, '"' );
  var cities = $.parseJSON( cities_json );

  $( 'body' ).on( 'country_to_state_changed', function(e, country, $container) {

    var $statebox = $container.find( '#billing_state, #shipping_state, #calc_shipping_state' );
    var $citybox = $container.find( '#billing_city, #shipping_city, #calc_shipping_city' );

    if ( $statebox.is('input') ) {
      cityToInput( $citybox );
    }
  });

  $( 'body' ).on( 'change', 'select.state_select, #calc_shipping_state', function() {

    var $container = $( this ).closest( 'div' );

    var country = $container.find( '#billing_country, #shipping_country, #calc_shipping_country' ).val();
    var state = $( this ).val();
    console.log(state);
    var $citybox = $container.find( '#billing_city, #shipping_city, #calc_shipping_city' );

    if ( cities[ country ] ) {
      if ( state ) {
        if ( cities[ country ][ state ] ) {
          cityToSelect( $citybox, cities[ country ][ state ] );
        } else {
          cityToInput( $citybox );
        }
      } else {
        disableCity( $citybox );
      }
    } else {
      cityToInput( $citybox );
    }

  });

  function cityToInput( $citybox ) {
    var input_name = $citybox.attr( 'name' );
    var input_id = $citybox.attr( 'id' );
    var placeholder = $citybox.attr( 'placeholder' );

    $citybox.replaceWith( '<input type="text" class="input-text" name="' + input_name + '" id="' + input_id + '" placeholder="' + placeholder + '" />' );
  }

  function disableCity( $citybox ) {
    $citybox.val( '' );
    $citybox.prop( 'disabled', true );
  }

  function cityToSelect( $citybox, current_cities ) {
    var value = $citybox.val();

    if ( $citybox.is('input') ) {
      var input_name = $citybox.attr( 'name' );
      var input_id = $citybox.attr( 'id' );
      var placeholder = $citybox.attr( 'placeholder' );

      $citybox.replaceWith( '<select name="' + input_name + '" id="' + input_id + '" class="city_select" placeholder="' + placeholder + '"></select>' );
      //we have to assign the new object, because of replaceWith
      $citybox = $('#'+input_id);
    } else {
      $citybox.prop( 'disabled', false );
    }

    var options = '';
    for( var index in current_cities ) {
      if ( current_cities.hasOwnProperty( index ) ) {
        var cityName = current_cities[ index ];
        options = options + '<option value="' + cityName + '">' + cityName + '</option>';
      }
    }

    $citybox.html( '<option value="">' + wc_city_select_params.i18n_select_city_text + '</option>' + options );

    if ( $('option[value="'+value+'"]', $citybox).length ) {
      $citybox.val( value ).change();
    }
  }

  $( '#calc_shipping_state' ).change();
});