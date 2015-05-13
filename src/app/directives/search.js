(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.directive('search', [function(){
        return {
             scope: true,
             restrict: 'A',
             template: '<p>{{ welcome }}</p>',
             replace: true
        };
    }]);
}(angular));