=== Plugin Name ===
Contributors: mantish
Tags: woocommerce, cities, city, city select, cities select, city dropdown, cities dropdown, woocommerce city, woocommerce cities
Requires at least: 4.0
Tested up to: 4.2.3
WC requires at least: 2.2
WC tested up to: 2.3.13

Show a dropdown select as the cities input.

== Description ==

WooCommerce uses a text input for the customers to enter the city or town. With this plugin you can provide a list of cities to be shown as a select dropdown.

This will be shown in checkot pages, edit addresses pages and shipping calculator if it's configured that way.

The plugin includes an example cities file. The format is an array of country -> states -> cities.

== Installation ==

1. Upload to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Use `wc_city_select_cities` filter to load your cities.