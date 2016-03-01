angular.module('app', ['ngRoute', 'ngResource']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $routeProvider.
        when('/', {templateUrl:'/partials/main', controller:'mainCtrl'});
});

angular.module('app').controller('mainCtrl', function($scope){
    $scope.bzVar = "BZ Angular Scope Variable";
});