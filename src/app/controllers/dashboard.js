(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.controller('dashboardController', ['$scope', 'searchService', function ($scope, searchService) {
        $scope.searchModel = 'robbert';
        $scope.welcome = 'Welcome client';
        $scope.$watch('searchModel', function (val) {
            // do stuff
            searchService.get(val).then(function (result) {
                $scope.results = result;
            }, function (error) {
                console.error(error);
                $scope.results = '';
            });
            $scope.searchModel = val;
            //$scope.$apply();
        });
    }]);

}(angular));