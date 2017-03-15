// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: $anchor
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

// Angular JS code
(function () {
    'use-strict';

    angular.module('mht.home', ['mht.service', 'mht.list'])
        .config([
          '$interpolateProvider',
            function ($interpolateProvider) {
                return $interpolateProvider.startSymbol('{(').endSymbol(')}');
          }
        ])
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'GHService', 'NpmService'];

    function HomeController($scope, GHService, NpmService) {
//        GHService.getGitHubConfig('jhipster', 'generator-jhipster').success(function (data) {
//            $scope.gitConfig = data;
//        });
        var page = 0;
    }

})();
