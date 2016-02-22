'use strict';
var services = angular.module('services', []);
services.service('Lunchers', function($http) { 
    this.all = function () {
        return $http.get('store/lunchers.json');
    };  
});
services.service('Tags', function($http) { 
    this.all = function () {
        return $http.get('store/tags.json');
    };     
});

