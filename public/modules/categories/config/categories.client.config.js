'use strict';

// Configuring the Articles module
angular.module('categories').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('n', 'Categories', 'categories', 'dropdown', '/categories(/create)?');
		Menus.addSubMenuItem('n', 'categories', 'List Categories', 'categories');
		Menus.addSubMenuItem('n', 'categories', 'New Category', 'categories/create');
	}
]);