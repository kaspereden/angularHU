(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.controller('dashboardController', ['$scope', function ($scope) {
        console.log('pancake');
        $scope.welcome = 'Welcome client';
    }]);

}(angular));