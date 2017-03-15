(function () {
    'use-strict';

    angular.module('mht.service', [])
        .factory('GHService', GHService);

    GHService.$inject = ['$http'];

    function GHService($http) {
        return {

            getGitHubConfig: function (author, name) {
                return $http.get('https://api.github.com/repos/' + author + '/' + name).success(function (resp) {
                    return resp;
                });
            },
            getGitHubContributors: function(author, name, page) {
                return $http.get('https://api.github.com/repos/' + author + '/' + name + '/contributors?page=' + page).success(function (resp) {
                    return resp;
                });
            },

            getReadme: function(author, repo, version) {
                return $http.get('https://raw.githubusercontent.com/' + author + '/' + repo + '/' + version +'/README.md').success(function (resp) {
                    return resp;
                });
            }
        }
    }
})();
