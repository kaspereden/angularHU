(function (angular) {
    'use strict';

    var fftf = angular.module('fitForTheFuture');

    fftf.factory('searchService', ['$q', '$timeout', 'urls', function($q, $timeout, urls){


        $http.get(urls.search)

        function _get(test) {
            var ku = new $q.defer();
            $timeout(function () {
            if (test !== 'robbert') {
                ku.reject('je mist "-jan"');
            } else {
                ku.resolve(['Pater', 'Paul', 'Blaa', 'HU', 'Nomnomnom']);
            }
            }, 500);
            return ku.promise;
        }

        function _post() {

        }

        return {
            get: _get,
            post: _post
        };
    }]);

    var urls = {
        search: '/services/search',
        google: 'www.google.com/getThings'
    };

    fftf.value('urls', {
        search: '/services/search',
        google: 'www.google.com/getThings'
    });
}(angular))