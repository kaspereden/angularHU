(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.controller('subscribePatientController',
        ['$scope', 'patientService',
            function ($scope, patientService) {
                $scope.hallo = 'Geef een jaar in:';
            }
        ]
    );

    fftf.controller('searchController',
        function ($scope, searchService) {

        }
    );
}(angular));