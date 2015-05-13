(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.controller('dashboardController', ['$scope', function ($scope) {
        $scope.searchModel = '-';
        $scope.welcome = 'Welcome client';
        $scope.$watch('searchModel', function (val) {
            // do stuff
            $scope.searchModel = val;
            $scope.$apply();
        });
    }]);

}(angular));