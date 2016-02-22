'use strict';
var services = angular.module('services', ['ngResource']);
services.factory('Lunchers', ['$resource', function($resource) { 
    return $resource('store/lunchers.json', {}, {
        query: {method:'GET', params:{luncher:'lunchers'}, isArray:true}
    });  
}]);
services.service('Tags', function($http) { 
    this.all = function () {
        return $http.get('store/tags.json');
    };     
});

