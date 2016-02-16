'use strict';
angular.module('lunchboxApp')
    .controller('LunchesCtrl', ['$scope', 'LunchService', function ($scope, LunchService) {    
    $scope.lunchers = LunchService.query();       
}]);




