=== WC City Select ===
Contributors: mantish
Donate link: mailto:paypal@8manos.com
Tags: woocommerce, cities, city, city select, cities select, city dropdown, cities dropdown, woocommerce city, woocommerce cities
Requires at least: 4.0
Tested up to: 4.4
Stable tag: 1.0.1
WC requires at least: 2.2
WC tested up to: 2.5.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

City Select for WooCommerce. Show a dropdown select as the cities input.

== Description ==

WooCommerce uses a text input for the customers to enter the city or town. With this plugin you can provide a list of cities to be shown as a select dropdown.

This will be shown in checkout pages, edit addresses pages and shipping calculator if it's configured that way.

The plugin includes Colombian cities in a file (you'd need to add Colombian states manually to make them work). Please check this file to see the format used for adding cities to any country.

### Github

Contribute at https://github.com/8manos/wc-city-select

== Installation ==

1. Upload to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Use `wc_city_select_cities` filter to load your cities. This is done similarly to [adding states/provinces](https://docs.woothemes.com/document/addmodify-states/). It should be added on your functions.php or a custom plugin.
```add_filter( 'wc_city_select_cities', 'my_cities' );
/**
 * Replace XX with the country code. Instead of YYY, ZZZ use actual  state codes.
 */
function my_cities( $cities ) {
	$cities['XX'] = array(
		'YYY' => array(
			'City ',
			'Another City'
		),
		'ZZZ' => array(
			'City 3',
			'City 4'
		)
	);
	return $cities;
}
```

== Changelog ==

= 1.0 =
* First release.