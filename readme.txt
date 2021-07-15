=== WC City Select ===
Contributors: mantish, rwky, jonaskirch
Donate link: mailto:paypal@8manos.com
Tags: woocommerce, cities, city, city select, cities select, city dropdown, cities dropdown, woocommerce city, woocommerce cities
Requires at least: 4.0
Tested up to: 5.8
Stable tag: 1.0.6
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

City Select for WooCommerce. Show a dropdown select as the cities input.

== Description ==

WooCommerce uses a text input for the customers to enter the city or town. With this plugin you can provide a list of cities to be shown as a select dropdown.

This will be shown in checkout pages, edit addresses pages and shipping calculator if it's configured that way.

### How to add cities

A list of cities has to be loaded in the functions.php file (the plugin already includes cities from some countries).

Use `wc_city_select_cities` filter to load your cities. This is done similarly to [adding states/provinces](https://docs.woothemes.com/document/addmodify-states/).
It should be added on your functions.php or a custom plugin.

`
add_filter( 'wc_city_select_cities', 'my_cities' );
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
`

It's also possible to use a list of cities without grouping them by state:

`
add_filter( 'wc_city_select_cities', 'my_cities' );
function my_cities( $cities ) {
	$cities['XX'] = array(
		'City ',
		'Another City'
	);
	return $cities;
}
`

### Github

Source code and contributions at [github](https://github.com/8manos/wc-city-select)

== Changelog ==

= 1.0.6 =
* Add support to WordPress multisite.

= 1.0.5 =
* Version bump without changes. Update if missing city files for new countries.

= 1.0.4 =
* Add city files for several countries: EC, DK, CA, CN, IT, BR, RO.
* fix warnings when using multiple countries.

= 1.0.3 =
* fix some issues when loading cities initially, that were causing warnings.

= 1.0.2 =
* fix some issues with shipping calculator and other edge cases.
* Now works with countries that have no states, only cities.

= 1.0.1 =
* select2 enhancement when available. Adds a JS version of the select dropdown.

= 1.0 =
* First release.
