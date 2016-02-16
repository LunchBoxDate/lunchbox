'use strict';
var services = angular.module('services', ['ngResource']);
services.factory('LunchService', ['$resource', function($resource) { 
    return $resource('store/lunchers.json', {}, {
        query: {method:'GET', params:{luncher:'lunchers'}, isArray:true}
    });  
}]);
