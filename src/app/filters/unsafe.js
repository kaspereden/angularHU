/* global angular */
(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.filter('reform', ['$sce', function ($sce) {
        return function (val) {
            return val + ' Hallo';
        };
    }]);
}(angular));
