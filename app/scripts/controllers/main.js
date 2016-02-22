'use strict';
var lunchboxApp = angular.module('lunchboxApp');
lunchboxApp.controller('LunchesCtrl', ['$scope', '$location', 'Lunchers', function ($scope, $location, Lunchers) {  
   $scope.searchText = $location.search().searchText;
   $scope.lunchers = Lunchers.query();   
}]);

lunchboxApp.controller('CloudCtrl', ['$scope', '$q', 'Tags', function ($scope, $q, Tags) {  
    $scope.tags = Tags.all() || [];
    $scope.words = []; 
    $scope.tags.success(function (data) {        
        for (var i = 0; i <  data.length; i++) {
            var tag =   data[i];    
            $scope.words.push({
                text : tag,
                weight: 3,
                link: '#//main?searchText=' + tag,
                handlers : {
                    click: function() {  
                        $scope.searchText = tag; 
                    }
                }
            });          
        }
    });
}]);


