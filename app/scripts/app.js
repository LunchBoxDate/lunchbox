'use strict';

/**
 * @ngdoc overview
 * @name lunchboxApp
 * @description
 * # lunchboxApp
 *
 * Main module of the application.
 */
var lunchbox = angular
  .module('lunchboxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'LunchesCtrl',
        controllerAs: 'lunches'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
    .when('/feeds', {
        templateUrl: 'views/feeds.html',
        controller: 'FeedsCtrl',
        controllerAs: 'feeds'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
