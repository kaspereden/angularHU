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
        $scope.searchModel = '-';
        $scope.welcome = 'Welcome client';
        $scope.$watch('searchModel', function (val) {
            // do stuff
            $scope.searchModel = val;
            $scope.$apply();
        });
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
            replace: true//,
            //compile: function (templateElement, templateAttributes) {
            //    function _compile($scope, element) {
            //        console.log($scope, element);
            //        $scope.searchType = (templateAttributes.dashboard === 'search') ? 'search' : 'no-search';
            //    }
            //
            //    return _compile;
            //}
        };
    }]);
}(angular));