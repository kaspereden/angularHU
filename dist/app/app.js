(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture', []);

    fftf.config([function () {
        console.log('config');
    }]);
}(angular));
(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.controller('dashboardController', ['$scope', function ($scope) {
        console.log('pancake');
        $scope.welcome = 'Welcome client';
    }]);

}(angular));
(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.directive('dashboard', [function(){
        return {
            scope: true,
            restrict: 'A',
            templateUrl: 'dist/app/templates/dashboard.html',
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
<div>
    <div search="search" ng-if="searchType === 'search'">Dit is er niet meer straks</div>
    <div ng-if="searchType !== 'search'">er is geen zoeken</div>
</div>