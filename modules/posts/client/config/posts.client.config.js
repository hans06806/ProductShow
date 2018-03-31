(function () {
  'use strict';

  angular
    .module('posts')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Products',
      state: 'posts',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'posts', {
      title: 'List Products',
      state: 'posts.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'posts', {
      title: 'Create Products',
      state: 'posts.create',
      roles: ['user']
    });
  }
}());
