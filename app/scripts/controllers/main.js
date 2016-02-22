'use strict';
var lunchboxApp = angular.module('lunchboxApp');
lunchboxApp.controller('LunchesCtrl', ['$scope', '$location', 'filterFilter', 'Lunchers', function ($scope, $location, filterFilter, Lunchers) {  
    $scope.searchText = $location.search().searchText;
    $scope.lunchers = [];
    $scope.words = [];
    Lunchers.all().then( function(result) {
        $scope.lunchers = result.data;       
        for (var i = 0; i <  $scope.lunchers.length; i++) {     
            var tags =   $scope.lunchers[i].tags;            
            for (var k = 0; k <  tags.length; k++) {
                var tag = tags[k];
                var existingTag = filterFilter($scope.words, { text: tag });
                if(existingTag && existingTag.length > 0) {                    
                    existingTag[0].weight = existingTag[0].weight + 1;                    
                } else {
                    $scope.words.push({
                        text : tag,
                        weight: 0,
                        link: '#//main?searchText=' + tag,
                        handlers : {
                            click: function() {  
                                $scope.searchText = tag; 
                            }
                        }
                    });
                }
            }
        }       
   });    
}]);