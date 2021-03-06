'use strict';

// Setting up route
angular.module('core', []).config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'app/partials/core/views/home.client.view.html'
		}).
    state('add-atm', {
      url: '/atm/add',
      templateUrl: 'app/partials/core/views/add-atm.client.view.html'
    }).
    state('edit-atm', {
      url: '/atm/edit/:id',
      templateUrl: 'app/partials/core/views/edit-atm.client.view.html'
    });
	}
]);