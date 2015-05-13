(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.directive('dashboard', [function(){
        return {
            scope: true,
            restrict: 'A',
            templateUrl: 'src/app/templates/dashboard.html',
            replace: true,
            compile: function (templateElement, templateAttributes) {
                function _compile($scope, element) {
                    console.log($scope, element);
                    $scope.searchType = (templateAttributes.dashboard === 'search') ? 'search' : 'no-search';
                }

                return _compile;
            }
        };
    }]);
}(angular));