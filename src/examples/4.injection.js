(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.controller('subscribePatientController',
        ['$scope', 'patientService',
            function ($scope, patientService) {

            }
        ]
    );

    fftf.controller('searchController',
        function ($scope, searchService) {

        }
    );
}(angular));